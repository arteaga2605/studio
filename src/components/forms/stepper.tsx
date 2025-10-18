import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

export function Stepper({ currentStep, totalSteps }: StepperProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors',
                step < currentStep
                  ? 'bg-primary text-primary-foreground'
                  : step === currentStep
                  ? 'border-2 border-primary bg-background text-primary'
                  : 'border-2 border-border bg-muted text-muted-foreground'
              )}
            >
              {step < currentStep ? <Check className="h-5 w-5" /> : step}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                'h-1 w-16 transition-colors',
                step < currentStep ? 'bg-primary' : 'bg-border'
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
