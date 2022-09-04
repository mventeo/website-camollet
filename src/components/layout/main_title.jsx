export function MainTitleDesc({ title, desc }) {
  return (
    <>
      <div className="sm:align-center bg-red-500 sm:flex sm:flex-col">
        <h1 className="p-2 text-center text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {desc && (
          <p className="mt-5 text-base text-white sm:text-center md:text-xl">
            {desc}
          </p>
        )}
      </div>
    </>
  )
}
