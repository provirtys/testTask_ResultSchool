import backgroundBlueImg from './img/background-blue.jpg'
import professionListImg from './img/profession-list.svg'
import backgroundDotsImg from './img/background-dots.png'
import projectsImg from './img/projects.jpg'
import examples from './img/examples.jpg'
import codeImg from './img/icons/code.svg'
import atomImg from './img/icons/atom.svg'
import nanoImg from './img/icons/nano.svg'
import nodeImg from './img/icons/node.svg'
import webImg from './img/icons/web.svg'
import tagImg from './img/icons/tag.svg'
import questionImg from './img/icons/question.svg'
import WhatBlock from './WhatBlock'

function App() {
  return (
    <div className="App ">
      <div className="wrapper bg-[#FBFBFB] z-[0] relative">
        <section className="profession overflow-hidden">
          <div className="profession__container mt-[100px] mb-[90px] mx-auto">
            <div className="profession__info relative mb-[100px] max-w-[1460px] w-[100%] mx-auto after:bg-[#7B72FE] after:content-[''] after:absolute after:top-0 after:left-[-80px] after:w-[120vw] after:h-[100%] after:z-[-2] after:rounded-l-[36px]">
              <img
                src={backgroundDotsImg}
                className="profession-dots absolute bottom-0 left-0 z-[-3] translate-y-[30%] translate-x-[-100%]"
              ></img>
              <div className="profession__main flex  flex-col lg:flex-row   justify-between items-center relative text-white px-[20px] min-h-[500px] lg:min-h-[700px] sm:min-h-[0px] sm:pt-[50px]">
                <div className="profession__main__body basis-[700px] md:min-h-[700px] grow-0 shrink-0">
                  <h1 className="profession__title text-[54px] font-semibold stroke-black leading-[70px] mb-[40px] ">
                    Профессия <br /> Frontend — разработчик
                  </h1>
                  <p className="profession__undertitle text-[30px] mb-[26px]">
                    Стань с нуля продвинутым Junior разработчиком за 7 месяцев с
                    знанием технологий больше, чем у других кандидатов
                  </p>
                  <p className="profession__label text-[18px] mb-[60px] font-regular">
                    Начиная с основ изучишь JavaScript, разберешься с самыми
                    популярными технологиями, научишься писать Frontend на
                    <span className="font-semibold"> фреймворке</span> и
                    связывать его с Backend. Навыки после курса оцениваются от
                    100 т.р.
                  </p>
                  <button className="profession__button px-[40px] py-[28px] bg-[#ED7138] rounded-[50px] text-[18px] font-regular">
                    Задать вопрос об обучении
                  </button>
                </div>
                <div className='self-end lg:basis-[830px] grow-0 shrink-0 relative top-[100px] md:bottom-0 right-[-20%] before:content-[url("img/background-dots.png")] before:top-0 before:left-0 before:absolute before:translate-x-[-35%] before:translate-y-[-35%] before:z-[-1] before:opacity-[20%] basis-[450px]'>
                  <img
                    className="profession__main-img "
                    src={professionListImg}
                  ></img>
                </div>
              </div>
              <div className="profession__circles absolute flex overflow-hidden w-[100%] bottom-0 left-0 z-[-1]">
                <div className="profession__circle"></div>
                <div className="profession__circle"></div>
                <div className="profession__circle"></div>
              </div>
              <div className="profession__addition drop-shadow-[0_35px_35px_rgba(0,0,0,0.07)] max-w-[400px] bg-white rounded-[24px] pt-[40px] pb-[30px] px-[24px] absolute bottom-0 left-[60%] translate-y-[50%]">
                <img
                  src={tagImg}
                  className="profession__addition-img absolute top-0 left-0 translate-x-[90%] translate-y-[-65%] bg-[#7F76FF] p-[19px] rounded-[24px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.07)]"
                ></img>
                <p className="profession__addition-text text-[16px]">
                  <span className="text-[#ED7138]">Обучение</span> для тех,{' '}
                  <span className="text-[#979EA2]">
                    кто готов учиться 10 часов в неделю
                  </span>
                  ,{' '}
                  <span className="text-[#ED7138]">
                    чтобы получить результат
                  </span>
                  . Мы даем{' '}
                  <span className="text-[#979EA2]">необходимые навыки</span> на
                  продвинутом уровне,{' '}
                  <span className="text-[#979EA2]">убирая все лишнее</span>
                </p>
              </div>
            </div>
            <section className="profession__numbers w-[100%] max-w-[1460px] mx-auto px-[60px] py-[20px]">
              <ul className="profession__numbers__row flex justify-evenly wrap max-w-[1230px] mx-auto items-center">
                <li className="profession__numbers__item">
                  <span className="profession__numbers__number text-[72px] text-[#ED7138] font-semibold">
                    293
                  </span>
                  <p className="profession__numbers__text text-[16px] max-w-[60%]">
                    HD видеоурока длительностью 3 - 15 минут{' '}
                  </p>
                </li>
                <li className="profession__numbers__item">
                  <span className="profession__numbers__number text-[72px] text-[#ED7138] font-semibold">
                    6
                  </span>
                  <p className="profession__numbers__text text-[16px] max-w-[60%]">
                    Мероприятий на курсе (Хакатоны, мастер классы, разборы и
                    т.д.)
                  </p>
                </li>
                <li className="profession__numbers__item">
                  <span className="profession__numbers__number text-[72px] text-[#ED7138] font-semibold">
                    193
                  </span>
                  <p className="profession__numbers__text text-[16px] max-w-[60%]">
                    заданий и тестов для закрепления
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </section>
        {/* <section className="how">
          <div className="how__container  mt-[50 px] mb-[125px]  mx-auto max-w-[1410px] text-center">
            <h2 className="how__title inline-block relative text-[54px] font-bold mb-[40px] before:absolute before:top-0 before:left-[-30px] before:translate-x-[-100%] before:translate-y-[-7px] before:content-[url('./img/icons/question.svg')]">
              Как именно ты станешь разработчиком
            </h2>
            <p className="how__subtitle text-[24px] max-w-[970px] text-center mb-[60px] mx-auto">
              На курсе ты не просто изучаешь теоретический материал. в процессе
              изучения ты повторяете за действующим разработчиком, после чего
              <span className="font-semibold">
                {' '}
                закрепляешь знания на заданиях и проектах
              </span>
              .
            </p>
            <div className="how__projects relative before:content-['Проекты_учеников'] before:leading-[20px] before:absolute before:bottom-[-16px] before:left-50 before:translate-x-[-50%] before:text-[13px]">
              <img src={projectsImg} alt="" className="how__img  mx-auto " />
              <div className="how__block1 absolute  top-[113px] left-0 translate-x-[-7%] text-left px-[20px] py-[24px] bg-white p-20px border-[#947EFF] border-[1px] rounded-[20px] max-w-[350px] drop-shadow-[0_35px_24px_rgba(0,0,0,0.02)]">
                <div className="how__block__title text-[14px] text-[#9088FF] mb-[14px] uppercase">
                  2 Командных проекта
                </div>
                <div className="how__block__text leading-[170%]">
                  <p className="mb-[16px]">
                    Симуляция комерческого проекта - получаете ТЗ и
                    организовываете командную разработку. Прокачивая навыки для
                    будущей работы.
                  </p>
                  <p className="font-medium">Проекты на тему:</p>
                  <ul className='list-["-_"] list-inside '>
                    <li>JavaScript плагин "Контекстное меню"</li>
                    <li>Сайт на React, презентующий команду участников</li>
                  </ul>
                </div>
              </div>
              <div className="how__block2 how__block1 absolute  bottom-[-13px] right-[-60px] translate-x-[-7%] text-left px-[20px] py-[24px] bg-white p-20px border-[#947EFF] border-[1px] rounded-[20px] max-w-[420px] drop-shadow-[0_35px_24px_rgba(0,0,0,0.02)]">
                <div className="how__block__title text-[14px] text-[#9088FF] mb-[14px] uppercase">
                  Индивидуальные проекты
                </div>
                <div className="how__block__text leading-[170%]">
                  <p className="mb-[36px]">
                    Чтобы свободно чуствовать себя на позиции junior необходим
                    опыт разработки. Вы создадите 3 проекта изучая материал от
                    простого к сложному:
                  </p>
                  <ol className="list-[decimal] list-inside">
                    <li>Проект корзина с товарами для интернет-магазина</li>
                    <li>Социальная сеть для поиска и знакомств</li>
                    <li>
                      Дипломный проект на выбранную вами тему:
                      <ul className='list-["-_"] list-inside ml-[0.5em]'>
                        <li>Учет доходов и рассходов</li>
                        <li>Бронирование отелей</li>
                        <li>
                          Интернет-магазин или схожий по сложности проект,
                          которым вы выберети и утвердите с куратором
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <WhatBlock />
      </div>
    </div>
  )
}

export default App

//old profession
{
  /* <div className="profession__info relative mb-[100px] max-w-[1460px] mx-auto after:bg-[#7B72FE] after:content-[''] after:absolute after:top-0 after:left-[50px] after:w-[120vw] after:h-[100%] after:z-[-1]">
              <img
                src={backgroundBlueImg}
                className="profession-background max-w-none rounded-l-[0px]"
              ></img>
              <img
                src={backgroundDotsImg}
                className="profession-dots absolute bottom-0 left-0 z-[-1] translate-y-[45%] translate-x-[-45%]"
              ></img>
              <div className="profession__main absolute top-[67px] left-[95px] max-w-[730px] text-white ">
                <h1 className="profession__title text-[54px] font-semibold stroke-black leading-[70px] mb-[40px] ">
                  Профессия <br /> Frontend — разработчик
                </h1>
                <p className="profession__undertitle text-[30px] mb-[26px]">
                  Стань с нуля продвинутым Junior разработчиком за 7 месяцев с
                  знанием технологий больше, чем у других кандидатов
                </p>
                <p className="profession__label text-[18px] mb-[60px] font-regular">
                  Начиная с основ изучишь JavaScript, разберешься с самыми
                  популярными технологиями, научишься писать Frontend на
                  <span className="font-semibold"> фреймворке</span> и связывать
                  его с Backend. Навыки после курса оцениваются от 100 т.р.
                </p>
                <button className="profession__button px-[40px] py-[28px] bg-[#ED7138] rounded-[50px] text-[18px] font-regular">
                  Задать вопрос об обучении
                </button>
              </div>
              <div className="profession__addition drop-shadow-[0_35px_35px_rgba(0,0,0,0.07)] max-w-[400px] bg-white rounded-[24px] pt-[40px] pb-[30px] px-[24px] absolute bottom-0 left-[60%] translate-y-[50%]">
                <img
                  src={tagImg}
                  className="profession__addition-img absolute top-0 left-0 translate-x-[90%] translate-y-[-65%] bg-[#7F76FF] p-[19px] rounded-[24px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.07)]"
                ></img>
                <p className="profession__addition-text text-[16px]">
                  <span className="text-[#ED7138]">Обучение</span> для тех,{' '}
                  <span className="text-[#979EA2]">
                    кто готов учиться 10 часов в неделю
                  </span>
                  ,{' '}
                  <span className="text-[#ED7138]">
                    чтобы получить результат
                  </span>
                  . Мы даем{' '}
                  <span className="text-[#979EA2]">необходимые навыки</span> на
                  продвинутом уровне,{' '}
                  <span className="text-[#979EA2]">убирая все лишнее</span>
                </p>
              </div>
            </div> */
}
