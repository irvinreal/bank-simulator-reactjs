function BackgroundImage({ src, alt }) {
  return (
    <div className='absolute top-0 left-0 right-0 -z-10 w-full h-full'>
      <div className='absolute z-50 bg-gradient-to-t from-white/50 w-full h-full' />
      <img
        className='absolute z-10 h-full w-auto md:h-full md:w-full object-cover object-[25%_50%] md:object-[50%_70%]'
        src={src}
        alt={alt}
      />
    </div>
  )
}

export default BackgroundImage
