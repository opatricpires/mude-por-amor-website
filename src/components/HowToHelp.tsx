import HowToHelpImage from "../assets/images/how-to-help.jpeg";
import Image from "next/image";
import React from "react";

const components = () => {
  return (
    <div className="bg-white h-screen flex">
      <div className="w-2/4 h-screen bg-slate-900 py-6">
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-20">
          COMO AJUDAR?
        </p>
        <div className="flex flex-col gap-10">
          <div className="relative px-16">
            <dt className="text-base font-semibold leading-7 text-white">
              Doações via pix
            </dt>
            <dd className="mt-2 text-base font-light leading-7 text-white">
              As doações que recebemos em dinheiro, através do pix, nos ajudam a
              manter as contas de água, luz e aluguel da nossa sede em dia! Essa
              verba também é destinada as compras de todos os alimentos que
              fazem parte das nossas entregas nas ruas, como água, pão,
              presunto, queijo, alface e tomate.
            </dd>
          </div>
          <div className="relative px-16">
            <dt className="text-base font-semibold leading-7 text-white">
              Seja um voluntário
            </dt>
            <dd className="mt-2 text-base font-light leading-7 text-white">
              A cada 2 meses o Mude faz integrações para a entrada de novos
              voluntários! e ser vonluntário é uma grande ajuda para o Mude. Nós
              ficamos extremamente felizes em ver a nossa familia crescendo e
              mais pessoas levando amor a quem precisa!
            </dd>
          </div>
          <div className="relative px-16">
            <dt className="text-base font-semibold leading-7 text-white">
              Doe cestas básicas
            </dt>
            <dd className="mt-2 text-base font-light leading-7 text-white">
              Atráves do link da Real Cestas é possível comprar cestas básicas
              para doar ao Mude. A cada 10 cestas básicas compradar pelo link, a
              Real Cestas doa 1 para o Mude!
            </dd>
          </div>
        </div>
      </div>
      <div className="w-2/4 h-screen">
        <div className="relative h-full w-full">
          <Image
            src={HowToHelpImage}
            alt="mulher com camisa amarela com a seguinte frase: apesar dos efeitos colaterais, o amor ainda é o melhor remédio!"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default components;
