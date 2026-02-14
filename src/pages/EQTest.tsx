import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle2, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { QuestionRenderer } from '@/components/eq-questions';
import { selectFullTestQuestions } from '@/lib/eq-questions';
import { calculateEQScore, getDimensionLabel, getScoreLevel } from '@/lib/eq-scoring';
import type { EQQuestion, EQResponse, BasicUserInfo, AssessmentStep, EQAssessmentResult, EQDimension } from '@/types/eq-assessment';

const EQTest: React.FC = () => {
  const [step, setStep] = useState<AssessmentStep>('intro');
  const [questions, setQuestions] = useState<EQQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<EQResponse[]>([]);
  const [basicInfo, setBasicInfo] = useState<BasicUserInfo>({
    firstName: '',
    lastName: '',
    email: '',
    takingFor: 'myself',
  });
  const [result, setResult] = useState<EQAssessmentResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize questions when starting the test
  const startTest = useCallback(() => {
    const selectedQuestions = selectFullTestQuestions();
    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setResponses([]);
    setStep('questions');
  }, []);

  // Handle answer submission
  const handleAnswer = useCallback((response: EQResponse) => {
    // Replace or add response
    setResponses(prev => {
      const existingIndex = prev.findIndex(r => r.questionId === response.questionId);
      if (existingIndex >= 0) {
        const newResponses = [...prev];
        newResponses[existingIndex] = response;
        return newResponses;
      }
      return [...prev, response];
    });
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStep('basic_info');
    }
  }, [currentQuestionIndex, questions.length]);

  // Go back to previous question
  const handleBack = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  // Calculate and show preview score
  const showScorePreview = useCallback(() => {
    if (!basicInfo.firstName || !basicInfo.lastName || !basicInfo.email) {
      return;
    }
    
    setIsSubmitting(true);
    
    const assessmentResult = calculateEQScore(
      questions,
      responses,
      basicInfo.email,
      'full_test'
    );
    
    setResult(assessmentResult);
    setStep('score_preview');
    setIsSubmitting(false);
  }, [basicInfo, questions, responses]);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 flex-shrink-0">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
          <div className="text-gray-900 font-bold text-lg">Lumi6 EQ Assessment</div>
          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Intro Step */}
        {step === 'intro' && (
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="max-w-xl w-full text-center">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Clock className="w-4 h-4" />
                Takes about 10 minutes
              </div>
              
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                Discover Your EQ Score
              </h1>
              <p className="text-gray-600 mb-6">
                Answer honestly - there are no right or wrong answers.
                Your responses help us understand your emotional intelligence across five dimensions.
              </p>

              <div className="bg-white rounded-lg p-4 mb-6 text-left border border-gray-200">
                <h2 className="font-bold text-gray-900 mb-3">What to Expect</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gray-400" />
                    50+ questions across different formats
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gray-400" />
                    Instant score preview after completion
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gray-400" />
                    Detailed report available with signup
                  </li>
                </ul>
              </div>

              <Button
                onClick={startTest}
                size="lg"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white"
              >
                Start Assessment
              </Button>
            </div>
          </div>
        )}

        {/* Questions Step */}
        {step === 'questions' && currentQuestion && (
          <div className="flex-1 flex flex-col p-4 md:p-6 max-w-2xl mx-auto w-full">
            <QuestionRenderer
              question={currentQuestion}
              onAnswer={handleAnswer}
              onBack={currentQuestionIndex > 0 ? handleBack : undefined}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
            />
          </div>
        )}

        {/* Basic Info Step */}
        {step === 'basic_info' && (
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6 text-gray-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    Assessment Complete!
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Enter your details to see your score
                  </p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); showScorePreview(); }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="firstName" className="text-sm">First Name</Label>
                      <Input
                        id="firstName"
                        value={basicInfo.firstName}
                        onChange={(e) => setBasicInfo(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm">Last Name</Label>
                      <Input
                        id="lastName"
                        value={basicInfo.lastName}
                        onChange={(e) => setBasicInfo(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={basicInfo.email}
                      onChange={(e) => setBasicInfo(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label className="text-sm">Taking this for</Label>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <button
                        type="button"
                        onClick={() => setBasicInfo(prev => ({ ...prev, takingFor: 'myself' }))}
                        className={`p-2 rounded border text-sm transition-all ${
                          basicInfo.takingFor === 'myself'
                            ? 'border-gray-900 bg-gray-900 text-white'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        Myself
                      </button>
                      <button
                        type="button"
                        onClick={() => setBasicInfo(prev => ({ ...prev, takingFor: 'company' }))}
                        className={`p-2 rounded border text-sm transition-all ${
                          basicInfo.takingFor === 'company'
                            ? 'border-gray-900 bg-gray-900 text-white'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        My Company
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !basicInfo.firstName || !basicInfo.lastName || !basicInfo.email}
                    className="w-full bg-gray-900 hover:bg-gray-800"
                  >
                    {isSubmitting ? 'Calculating...' : 'See My Score'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Score Preview Step */}
        {step === 'score_preview' && result && (
          <div className="flex-1 overflow-y-auto p-4">
            <div className="max-w-xl mx-auto">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                {/* Score Display */}
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {basicInfo.firstName}, your EQ Score
                  </h2>
                  
                  {/* Overall Score */}
                  <div className="relative inline-flex items-center justify-center mb-4">
                    <svg className="w-32 h-32">
                      <circle
                        className="text-gray-200"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="56"
                        cx="64"
                        cy="64"
                      />
                      <circle
                        className="text-gray-900"
                        strokeWidth="8"
                        strokeDasharray={`${((Number.isFinite(result.overallScore) ? result.overallScore : 50) / 100) * 352} 352`}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="56"
                        cx="64"
                        cy="64"
                        style={{ transform: 'rotate(-90deg)', transformOrigin: '64px 64px' }}
                      />
                    </svg>
                    <div className="absolute">
                      <div className="text-3xl font-bold text-gray-900">{Number.isFinite(result.overallScore) ? result.overallScore : '—'}</div>
                      <div className="text-xs text-gray-500">out of 100</div>
                    </div>
                  </div>

                  <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                    {getScoreLevel(Number.isFinite(result.overallScore) ? result.overallScore : 50).charAt(0).toUpperCase() + getScoreLevel(Number.isFinite(result.overallScore) ? result.overallScore : 50).slice(1)} Level
                  </div>
                </div>

                {/* Dimension Scores */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Dimension Scores</h3>
                  <div className="space-y-3">
                    {(Object.keys(result.dimensionScores) as EQDimension[]).map((dimension) => {
                      const raw = result.dimensionScores[dimension];
                      const score = Number.isFinite(raw) ? raw : 0;
                      return (
                        <div key={dimension}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-700">{getDimensionLabel(dimension)}</span>
                            <span className="text-gray-500">{Number.isFinite(raw) ? raw : '—'}</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gray-900 rounded-full"
                              style={{ width: `${Math.max(0, Math.min(100, score))}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Strengths & Growth */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-50 rounded p-3">
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Strengths</h4>
                    <ul className="space-y-1 text-xs text-gray-600">
                      {result.strengths.map(s => (
                        <li key={s}>• {getDimensionLabel(s)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded p-3">
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Growth Areas</h4>
                    <ul className="space-y-1 text-xs text-gray-600">
                      {result.growthAreas.map(g => (
                        <li key={g}>• {getDimensionLabel(g)}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA for Full Report */}
                <div className="bg-gray-900 rounded-lg p-4 text-white text-center mb-4">
                  <h3 className="font-bold mb-1">Get Your Full Report</h3>
                  <p className="text-gray-300 text-xs mb-3">
                    Detailed insights and personalized recommendations
                  </p>
                  <Button
                    onClick={() => window.open('https://app.lumi6.com/signup', '_blank')}
                    className="bg-white text-gray-900 hover:bg-gray-100"
                    size="sm"
                  >
                    Sign Up Free
                  </Button>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setStep('intro');
                      setResponses([]);
                      setResult(null);
                    }}
                    className="flex-1"
                    size="sm"
                  >
                    Retake
                  </Button>
                  <Link to="/" className="flex-1">
                    <Button variant="ghost" className="w-full" size="sm">
                      Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default EQTest;
