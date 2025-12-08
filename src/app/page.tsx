import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindMint',
  description: 'MindMint is an innovative mental health and productivity tool that helps small businesses streamline their workflow while improving employees' mental well-being through personalized coaching sessions and AI-driven analytics.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">MindMint</h1>
      <p className="mt-4 text-lg">MindMint is an innovative mental health and productivity tool that helps small businesses streamline their workflow while improving employees' mental well-being through personalized coaching sessions and AI-driven analytics.</p>
    </main>
  )
}
