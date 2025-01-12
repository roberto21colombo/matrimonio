export default ({
	image,
	swap,
	title,
	description,
	children
}: {
	image: string
	swap: boolean
	title: any
	description: any
	children: any
}) => {
	const Image = (
		<div className="flex h-full w-full content-center justify-center overflow-hidden p-10">
			<img src={image} alt="Image" className="w-full rounded-2xl object-cover" />
		</div>
	)
	const Texts = (
		<div className="flex h-full w-full flex-col justify-around gap-4 p-8">
			<div
				className={`flex flex-col gap-4 sm:text-center ${swap ? 'md:text-right' : 'md:text-left'}`}
			>
				<h2
					className="text-4xl font-bold text-[#303033]"
					dangerouslySetInnerHTML={{ __html: title }}
				></h2>
				<p className="text-[#303033]">{description}</p>
			</div>
			<div className="flex justify-center">{children}</div>
		</div>
	)

	return (
		<div
			className={`flex h-[700px] bg-gradient-to-b from-[#f3f4e7] sm:grid-cols-1 md:grid-cols-2 ${swap ? 'md:flex-row-reverse' : 'md:flex-row'} sm:flex-col`}
		>
			<div className="flex h-full w-full content-center justify-center overflow-hidden p-10">
				<img src={image} alt="Image" className="w-full rounded-2xl object-cover" />
			</div>
			<div className="flex h-full w-full flex-col justify-around gap-4 p-8">
				<div
					className={`flex flex-col gap-4 sm:text-center ${swap ? 'md:text-right' : 'md:text-left'}`}
				>
					<h2
						className="text-4xl font-bold text-[#303033]"
						dangerouslySetInnerHTML={{ __html: title }}
					></h2>
					<p className="text-[#303033]">{description}</p>
				</div>
				<div className="flex justify-center">{children}</div>
			</div>
		</div>
	)
}
