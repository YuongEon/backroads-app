import { servicesData } from "../data"
import Service from "./Service";
import Title from "./Title"

const Services = () => {
  return (
    <section className="section services" id="services">
    <Title title="our" subTitle="service"/>
    <div className="section-center services-center">
      {
        servicesData.map(data => {
          return (
            <Service key={data.id} {...data}/>
          )
        })
      }
    </div>
  </section>
  )
}

export default Services