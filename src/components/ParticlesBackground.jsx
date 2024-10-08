import Particles from "@tsparticles/react";
import ParticleConfig from "./config/ParticlesConfig"



const  ParticlesBackground= ()=>{
  return (
    <Particles params={ParticleConfig}></Particles>
  )
}

export default ParticlesBackground;