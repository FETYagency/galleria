export default function View({ img, handler }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-[24px]">
      <div>
        <div className="flex h-[83px] items-stretch justify-end">
          <button className="grid place-items-center text-white text-[14px] font-bold tracking-[3px]" onClick={()=>handler(false)}>CLOSE</button>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
