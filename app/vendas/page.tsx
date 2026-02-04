import Contraste from "@/componentes/ComponentesVendas/Contraste"
import Diferenciais from "@/componentes/ComponentesVendas/Diferenciais"
import FormVendas from "@/componentes/ComponentesVendas/FormVendas"
import HeroVendas from "@/componentes/ComponentesVendas/HeroVendas"
import MapSection from "@/componentes/ComponentesVendas/MapSection"
import Resultados from "@/componentes/ComponentesVendas/Resultados"
import SlideFaixaVendas from "@/componentes/ComponentesVendas/SlideFaixaVendas"
import Vantagens from "@/componentes/ComponentesVendas/Vantagens"

const Vendas = () => {
    return (
        <>
            <section>
                <HeroVendas />
                <SlideFaixaVendas />
                <Vantagens />
                <Diferenciais />
                <Resultados />
                <Contraste/>
                <FormVendas/>
                <MapSection/>
            </section>
        </>
    )
}

export default Vendas