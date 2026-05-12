function App() {
	return (
		<main className="flex min-h-screen flex-col bg-white text-black">
			<nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
				<a href="#" className="text-xl font-bold tracking-tight">
					Monochrome
				</a>

				<div className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
					<a href="#" className="transition hover:text-black">
						Work
					</a>
					<a href="#" className="transition hover:text-black">
						Services
					</a>
					<a href="#" className="transition hover:text-black">
						About
					</a>
					<a href="#" className="transition hover:text-black">
						Contact
					</a>
				</div>

				<a
					href="#"
					className="rounded-full border border-black px-5 py-2 text-sm font-semibold transition hover:bg-black hover:text-white"
				>
					Start Now
				</a>
			</nav>

			<section className="flex flex-1 items-center justify-center">
				<h1 className="text-7xl font-bold">Introduction to React</h1>
			</section>
		</main>
	);
}

export default App;
