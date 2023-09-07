import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="flex flex-col w-full items-center">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
          >
            <span className="text-brown-500">Riwayat Hidup</span> Arie Aripin
          </motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="leading-normal w-10/12 sm:w-7/12 mx-auto my-2 text-center text-xl"
          >
            Sepak Terjang Arie Aripin
          </motion.p>
        </ScrollAnimationWrapper>

        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
          <ScrollAnimationWrapper className="flex w-full justify-center">
            <motion.div
              className="h-full w-full p-6 items-center mb-50"
              variants={scrollAnimation}
              style={{ overflow: "hidden" }}
            >
              <Image
                src="/assets/arie.jpg"
                alt="Arie Aripin"
                layout="responsive"
                quality={100}
                height={1000}
                width={1500}
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
              variants={scrollAnimation}
            >
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-5 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <p className="mb-4 text-base font-normal text-black-600 dark:text-black-600">
                    "Bakat Komunikasi Sudah Ada Sejak Kecil Arie Aripin lahir di
                    Kota Malang. Sejak kecil Arie sudah berbakat untuk
                    berkomunikasi dan menjadi seorang pekerja yang ulet"
                  </p>
                </li>
                <li className="mb-5 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <p className="text-base font-normal text-black-600 dark:text-black-600">
                    Jenjang pendidikan yang hanya sampai di bangku SMP tetap
                    mampu menghantarkan Arie untuk berkeliling dunia. Selepas
                    lulus sekolah, Arie memutuskan untuk merantau ke Bali. Di
                    Bali, Arie terpilih menjadi salah satu anak yang kreatif
                    sehingga dapat mengantarkannya ke Florida, Amerika Serikat."
                  </p>
                </li>
                <li className="mb-5 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <p className="text-base font-normal text-black-600 dark:text-black-600">
                    "Selama di Florida, Arie memutuskan untuk terjun ke dunia
                    pariwisata sehingga perusahaan yang ada di Amerika
                    menugaskan Arie untuk berkeliling ke 26 negara dan mengurusi
                    di bidang pariwisata."
                  </p>
                </li>
                <li className="mb-5 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <p className="text-base font-normal text-black-600 dark:text-black-600">
                    "Berbekal pengalaman berkeliling dunia di beberapa negara,
                    Arie semakin bertekad untuk menggeluti di bidang kuliner
                    atau gastronomi dunia. Selain itu Arie juga berimajinatif
                    untuk menjadi pemerhati lingkungan dan tumbuh kembang anak
                    dan manusia yang seutuhnya."
                  </p>
                </li>
                <li className="mb-5 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <p className="text-base font-normal text-black-600 dark:text-black-600">
                    "Selepas pulang dari Amerika, Arie telah membuka hotel di
                    Bali dan Malaysia. Selain itu Arie juga mendirikan pabrik
                    kebutuhan anak-anak bermain, salah satunya adalah playground
                    dan berkarya di beberapa Negara Asia."
                  </p>
                </li>
                <li className="mb-5 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <p className="text-base font-normal text-black-600 dark:text-black-600">
                    "Ditunjuk menjadi Gastronom Internasional dan membawa
                    delegasi Indonesia ke Paris"
                  </p>
                </li>
              </ol>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Feature;
