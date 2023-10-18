import Kiosk from "../../../layouts/Kiosk";
import KioskMenubar from "../../../components/Kiosk/KioskMenubar";
import MenuItem from "../../../components/Kiosk/MenuItem";

const data = [
  {
    menuName: "",
    img: ""
  }
]

export default function Menu() {
  const handelClickMenu = (event) => {
    event.preventDefault();
    console.log(event);
  }
  return (
    <div className={`container px-4 mx-auto h-full`}>
      <div className={`flex h-full`}>
        <div className="md:w-8/12 px-4 py-4 flex flex-col">
          <KioskMenubar />
          <div className={`flex flex-wrap h-full`}>
            <MenuItem onClick={handelClickMenu} menuName={`아메리카노`} img={`https://t1.daumcdn.net/cafeattach/1Frx7/6e867e71391691ae3dd805cbcf58c5c32c898dd6`}/>
            <MenuItem onClick={handelClickMenu} menuName={`카페라떼`} img={`https://image.aladin.co.kr/product/8883/76/cover500/s572635127_2.jpg`}/>
            <MenuItem onClick={handelClickMenu} menuName={`카페모카`} img={`http://www.dunkindonuts.co.kr/upload/product/1607136351.png`}/>
            <MenuItem onClick={handelClickMenu} menuName={`콜드브루`} img={`http://www.breadnco.kr/wp-content/uploads/2022/05/%EC%BD%9C%EB%93%9C%EB%B8%8C%EB%A3%A8-%EC%A0%9C%ED%92%88%EB%93%B1%EB%A1%9D%EC%9A%A9.png`}/>
            <MenuItem onClick={handelClickMenu} menuName={`바닐라 카페라떼`} img={`https://cdn.imweb.me/upload/S201904245cbfeaeb57b7d/82285d9641086.jpg`}/>
            <MenuItem onClick={handelClickMenu} menuName={`콜드브루 라떼`} img={`http://www.breadnco.kr/wp-content/uploads/2021/07/%EC%BD%9C%EB%93%9C%EB%B8%8C%EB%A3%A8-%EB%9D%BC%EB%96%BC.png`}/>
            <MenuItem onClick={handelClickMenu} menuName={`카푸치노`} img={`http://www.breadnco.kr/wp-content/uploads/2019/09/%EC%B9%B4%ED%91%B8%EC%B9%98%EB%85%B8_%EB%A6%AC%EC%82%AC%EC%9D%B4%EC%A7%95.png`}/>
          </div>
        </div>
        <div className="md:w-4/12 px-4">
          <span>dafsdfasdf</span>
        </div>
      </div>
      <div></div>
    </div>
  )
}

Menu.layout = Kiosk;