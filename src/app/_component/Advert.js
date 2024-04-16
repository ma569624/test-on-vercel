import Image from "next/image";
const Advert = ({ advert, endpoint }) => {
  const API = "http://89.116.20.142:5000";
  return (
    <>
      {
        advert.length > 0 && 
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-center">
                {advert
                  .filter((item) => item.location.includes(`${endpoint}`))
                  .map((item, key) => (
                    <a
                      key={key}
                      target="_blank"
                      href={item.url ? item.url : `${API}${item.Image2}`}
                    >
                      <Image
                        width={900}
                        height={160}
                        style={{ width: "900px", height: "160px" }}
                        src={`${API}${item.Image1}`}
                        alt=""
                      />
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Advert;
