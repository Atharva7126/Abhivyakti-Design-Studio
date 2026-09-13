'use client';

import { SubmitEvent, useState } from 'react';
import { ArrowRight, Check, MoveLeft } from 'lucide-react';
import Link from 'next/link';

import { authClient } from '@/lib/auth-client';

export default function RegisterPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState('');

	async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		setError('');
		setIsSubmitting(true);

		const formData = new FormData(event.currentTarget);
		const name = String(formData.get('name') ?? '').trim();
		const email = String(formData.get('email') ?? '').trim();
		const password = String(formData.get('password') ?? '');

		const result = await authClient.signUp.email({
			name,
			email,
			password,
		});

		if (result.error) {
			setError(result.error.message ?? 'Unable to create your account. Please try again.');
			setIsSubmitting(false);
			return;
		}

		window.location.href = '/admin';
	}

	return (
		<main className="flex min-h-screen bg-brand-primary/70 text-brand-secondary">
			<section className="flex w-full items-center justify-center px-5 py-10 sm:px-10">
				<div className="w-full max-w-md">
					<Link
						href="/"
						className="mb-14 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-brand-secondary/55 transition-colors hover:text-brand-secondary lg:hidden"
					>
						<MoveLeft className="h-4 w-4" strokeWidth={1.5} />
						BACK TO PORTFOLIO
					</Link>

					<div className="mb-10">
						<span className="mb-4 block text-xs font-semibold tracking-[0.25em] text-brand-hover">
							CREATE ACCOUNT
						</span>
						<h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
							Welcome to the studio.
						</h2>
						<p className="mt-4 text-sm leading-6 text-brand-secondary/65">
							Set up your account to begin shaping your workspace.
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label htmlFor="name" className="mb-2 block text-xs font-semibold tracking-[0.16em]">
								FULL NAME
							</label>
							<input
								id="name"
								name="name"
								type="text"
								autoComplete="name"
								required
								placeholder="Your name"
								className="h-12 w-full border-b border-brand-secondary/25 bg-transparent px-0 text-base outline-none transition-colors placeholder:text-brand-secondary/35 focus:border-brand-hover"
							/>
						</div>

						<div>
							<label htmlFor="email" className="mb-2 block text-xs font-semibold tracking-[0.16em]">
								EMAIL ADDRESS
							</label>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								placeholder="you@example.com"
								className="h-12 w-full border-b border-brand-secondary/25 bg-transparent px-0 text-base outline-none transition-colors placeholder:text-brand-secondary/35 focus:border-brand-hover"
							/>
						</div>

						<div>
							<label htmlFor="password" className="mb-2 block text-xs font-semibold tracking-[0.16em]">
								PASSWORD
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="new-password"
								minLength={8}
								required
								placeholder="At least 8 characters"
								className="h-12 w-full border-b border-brand-secondary/25 bg-transparent px-0 text-base outline-none transition-colors placeholder:text-brand-secondary/35 focus:border-brand-hover"
							/>
						</div>

						{error && (
							<p role="alert" className="border-l-2 border-red-700 bg-red-700/5 px-3 py-2 text-sm text-red-800">
								{error}
							</p>
						)}

						<button
							type="submit"
							disabled={isSubmitting}
							className="group inline-flex h-12 w-full items-center justify-center gap-3 bg-brand-secondary px-6 text-xs font-semibold tracking-[0.2em] text-brand-primary transition-colors hover:bg-brand-secondary/90 disabled:cursor-wait disabled:opacity-60"
						>
							{isSubmitting ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
							{isSubmitting ? (
								<Check className="h-4 w-4" strokeWidth={1.5} />
							) : (
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
							)}
						</button>
					</form>

					{/* <p className="mt-8 text-center text-sm text-brand-secondary/60">
						Already have an account?{' '}
						<Link href="/admin/login" className="font-semibold text-brand-hover transition-colors hover:text-brand-secondary">
							Sign in
						</Link>
					</p> */}
				</div>
			</section>
		</main>
	);
}
