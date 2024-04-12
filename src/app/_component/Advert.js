
const Advert = ({advert, endpoint }) => {
    const API = 'https://new-backend-server-production.up.railway.app';
    return (
        <div className="container">
            {<div className="row">
                <div className="col-lg-12">
                    <div className="d-flex justify-content-center">
                        {
                            advert.filter(item => item.location.includes(`${endpoint}`)).map((item, key) => (
                                <a key={key} target='_blank' href={item.url ? item.url : `${API}${item.Image2}`}><img style={{ width: '900px', height: '160px' }} src={`${API}${item.Image1}`} alt="" /></a>

                            ))
                        }
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Advert