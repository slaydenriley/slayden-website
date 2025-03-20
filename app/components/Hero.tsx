const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="w-full md:w-3/5 space-y-4">
        <h1 className="text-5xl font-bold">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Aarav
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          A passionate software developer focused on building innovative web applications
        </p>
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Contact Me
          </Link>
          <Link
            href="/projects"
            className="border border-purple-500 text-purple-500 px-6 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition"
          >
            View Projects
          </Link>
        </div>
      </div>
      <div className="w-full md:w-2/5 flex justify-center mb-8 md:mb-0">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
    </div>
  );
}; 