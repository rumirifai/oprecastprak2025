interface TimelineEvent {
  icon: string
  title: string
  date?: string
  description?: string
  links?: TimelineLink[]
  steps: string[]
  additionalSteps?: string[]
}
