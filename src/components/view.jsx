export default function View({ img, undo }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center  bg-brand-0/95">
      <div className="layout md:layout-md">
        <div className="flex items-center justify-end py-[33px]">
          <button
            className="font-brand text-[14px] font-bold tracking-[3px] text-brand-4"
            onClick={undo}
          >
            CLOSE
          </button>
        </div>
        <img src={img} className="md:h-[500px] md:w-full md:object-cover" />
      </div>
    </div>
  );
}
