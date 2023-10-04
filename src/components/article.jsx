export default function Article({ year, desc, source }) {
  return (
    <article className="relative mt-[172px] md:mt-[139px] 2xl:mt-0 2xl:flex 2xl:shrink-0 2xl:basis-[475px] 2xl:flex-col 2xl:justify-center">
      <h3 className="absolute right-0 top-[-73px] z-0 text-[100px] font-bold leading-[100px] text-[#F3F3F3] md:left-0 md:right-auto md:text-[200px] md:leading-[158px] 2xl:left-auto 2xl:right-0 2xl:top-[-20px]">
        {year}
      </h3>
      <p className="relative 2xl:static z-20 text-[14px] font-bold leading-[28px] text-[#7D7D7D] md:m-auto md:w-[457px] 2xl:m-0 2xl:w-[350px]">
        {desc}
        <a
          className="mb-[140px] mt-[68px] block text-[9px] font-bold uppercase tracking-[1.929px] text-[#7D7D7D] underline 2xl:absolute 2xl:bottom-0 2xl:left-0 2xl:mb-0 2xl:mt-0"
          href={source}
          target="_blank"
        >
          go to source
        </a>
      </p>
    </article>
  );
}
