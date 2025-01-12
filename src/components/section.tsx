export default ({
	image,
	swap,
	title,
	description
}: {
	image: string
	swap: boolean
	title: any
	description: any
}) => {
	const Image = (
		<div className="flex content-center justify-center overflow-hidden p-8">
			<img src={image} alt="Image" className="h-full rounded-2xl object-fill" />
		</div>
	)
	const Elements = (
		<div className="flex h-full w-full flex-col justify-around gap-4 p-8">
			<div className={`flex flex-col gap-4 ${swap ? 'text-right' : 'text-left'}`}>
				<h2
					className="text-4xl font-bold text-[#303033]"
					dangerouslySetInnerHTML={{ __html: title }}
				></h2>
				<p className="text-[#303033]">{description}</p>
			</div>
			<div className="flex justify-center">
				<slot />
			</div>
		</div>
	)

	const El = swap ? [Elements, Image] : [Image, Elements]

	return <div className="grid h-[763px] grid-cols-2 border-2 border-solid bg-[#f3f4e7]">{El}</div>
}
