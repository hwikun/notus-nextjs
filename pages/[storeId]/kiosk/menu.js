import Kiosk from "../../../layouts/Kiosk";
import KioskMenubar from "../../../components/Kiosk/KioskMenubar";
import MenuItem from "../../../components/Kiosk/MenuItem";

export default function Menu() {
  return <div className={`container px-4 mx-auto h-full`}>
    <div className={`flex flex-wrap h-full`}>
      <div className="md:w-8/12 px-4 py-4">
        <KioskMenubar />
        <div className={`container flex flex-wrap h-1/4`}>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
        <div className={`container flex flex-wrap h-1/4`}>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />

        </div>
      </div>
      <div className="md:w-4/12 px-4">
        <span>dafsdfasdf</span>
      </div>
    </div>
    <div></div>

  </div>
}

Menu.layout = Kiosk;