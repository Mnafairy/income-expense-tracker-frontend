import { GeldIcon, Geldtxt } from "./icons/icon";
export const Loading = () => (
  <div className="w-screen h-screen flex items-center justify-center">
    <div className="flex flex-col gap-12">
      <div className="p-2.5 flex gap-[17px]">
        <GeldIcon width="44.4" height="43.8" />
        <Geldtxt width="90" height="31" />
      </div>
      <div className="flex flex-col gap-4 items-center jusitfy-center">
        <span class="loading loading-spinner loading-md"></span>
        <div>Түр хүлээнэ үү...</div>
      </div>
    </div>
  </div>
);
