import { React, useEffect, useState } from 'react'
import codeImg from './img/icons/code.svg'
import atomImg from './img/icons/atom.svg'
import nanoImg from './img/icons/nano.svg'
import nodeImg from './img/icons/node.svg'
import webImg from './img/icons/web.svg'

function WhatBlock() {
  const [h2Y, setH2Y] = useState(0)
  const [firstItemY, setFirstItemY] = useState(0)
  const [secondItemY, setSecondItemY] = useState(0)
  const [thirdItemY, setThirdItemY] = useState(0)
  const [fourthItemY, setFourthItemY] = useState(0)
  const [fifthItemY, setFifthItemY] = useState(0)
  const [sixthItemY, setSixthItemY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      let whatDiv = document.querySelector('.what')
      let main = document.querySelector('.main')
      let mainPosition = main.getBoundingClientRect().top
      let h2 = document.querySelector('.h2')
      let h2Start = 50
      let h2Duration = 300
      let scrolled
      let skillsTitles = document.querySelector('.skills__titles')
      let skillsFirstRow = document.querySelector('.skills__firstrow')
      let skillsSecondRow = document.querySelector('.skills__secondrow')

      let firstItem = skillsFirstRow.querySelector('.skills__item:nth-child(1)')
      let secondItem = skillsFirstRow.querySelector(
        '.skills__item:nth-child(2)'
      )
      let thirdItem = skillsFirstRow.querySelector('.skills__item:nth-child(3)')

      let fourthItem = skillsSecondRow.querySelector(
        '.skills__item:nth-child(1)'
      )
      let fifthItem = skillsSecondRow.querySelector(
        '.skills__item:nth-child(2)'
      )
      let sixthItem = skillsSecondRow.querySelector(
        '.skills__item:nth-child(3)'
      )

      scrolled = -whatDiv.getBoundingClientRect().top

      if (mainPosition <= 50) {
        function changeOpacity(elem, start, end, from = 0, to = 1) {
          let result =
            ((scrolled - start) / (end - start)) * Math.abs(to - from)
          if (to === 1) {
            elem.style.opacity = from + result
          } else {
            elem.style.opacity = 1 - result
          }
        }

        function translateVertical(elem, start, end, num, reverse = 0) {
          let result = ((scrolled - start) / (end - start)) * num

          if (!reverse) {
            if (!isNaN(num)) {
              elem.style.transform = `translateY(${result}px)`
            } else if (num[num.length - 1] === '%') {
              num = (elem.offsetHeight * num.slice(0, -1)) / 100
              result = ((scrolled - start) / (end - start)) * num
              elem.style.transform = `translateY(${result}px)`
            }
          } else {
            switch (elem) {
              case h2:
                if (!isNaN(num)) {
                  elem.style.transform = `translateY(${h2Y + result}px)`
                } else if (num[num.length - 1] === '%') {
                  num = (elem.offsetHeight * num.slice(0, -1)) / 100
                  result = ((scrolled - start) / (end - start)) * num
                  elem.style.transform = `translateY(${h2Y + result}px)`
                }
                break
              case firstItem:
                if (!isNaN(num)) {
                  elem.style.transform = `translateY(${firstItemY + result}px)`
                } else if (num[num.length - 1] === '%') {
                  num = (elem.offsetHeight * num.slice(0, -1)) / 100
                  result = ((scrolled - start) / (end - start)) * num
                  elem.style.transform = `translateY(${firstItemY + result}px)`
                }
                break
              case secondItem:
                if (!isNaN(num)) {
                  elem.style.transform = `translateY(${secondItemY + result}px)`
                } else if (num[num.length - 1] === '%') {
                  num = (elem.offsetHeight * num.slice(0, -1)) / 100
                  result = ((scrolled - start) / (end - start)) * num
                  elem.style.transform = `translateY(${secondItemY + result}px)`
                }
                break

              case thirdItem:
                if (!isNaN(num)) {
                  elem.style.transform = `translateY(${thirdItemY + result}px)`
                } else if (num[num.length - 1] === '%') {
                  num = (elem.offsetHeight * num.slice(0, -1)) / 100
                  result = ((scrolled - start) / (end - start)) * num
                  elem.style.transform = `translateY(${thirdItemY + result}px)`
                }
                break

              case fourthItem:
                if (!isNaN(num)) {
                  elem.style.transform = `translateY(${fourthItemY + result}px)`
                } else if (num[num.length - 1] === '%') {
                  num = (elem.offsetHeight * num.slice(0, -1)) / 100
                  result = ((scrolled - start) / (end - start)) * num
                  elem.style.transform = `translateY(${fourthItemY + result}px)`
                }
                break

              case fifthItem:
                if (!isNaN(num)) {
                  elem.style.transform = `translateY(${fifthItemY + result}px)`
                } else if (num[num.length - 1] === '%') {
                  num = (elem.offsetHeight * num.slice(0, -1)) / 100
                  result = ((scrolled - start) / (end - start)) * num
                  elem.style.transform = `translateY(${fifthItemY + result}px)`
                }
                break

              case sixthItem:
                if (!isNaN(num)) {
                  elem.style.transform = `translateY(${sixthItemY + result}px)`
                } else if (num[num.length - 1] === '%') {
                  num = (elem.offsetHeight * num.slice(0, -1)) / 100
                  result = ((scrolled - start) / (end - start)) * num
                  elem.style.transform = `translateY(${sixthItemY + result}px)`
                }
                break
            }
          }
        }
        function translateHorizontal(elem, start, end, num) {
          let result = ((scrolled - start) / (end - start)) * num
          if (!isNaN(num)) {
            elem.style.transform = `translateX(${140 + result}px)`
          } else if (num[num.length - 1] === '%') {
            num = (elem.offsetHeight * num.slice(0, -1)) / 100
            result = ((scrolled - start) / (end - start)) * num
            elem.style.transform = `translateX(${140 + result}px)`
          }
        }

        main.classList.add('sticky', 'top-[50px]')

        //h2 appear
        if (scrolled >= h2Start && scrolled < h2Start + h2Duration) {
          changeOpacity(h2, h2Start, h2Duration)
          h2.style.transform = `translateY(1px)`
        } else if (scrolled < h2Start) {
          h2.style.opacity = 0
        }
    

        //h2 to top
        if (scrolled >= h2Duration && scrolled < h2Duration * 2) {
          translateVertical(h2, h2Duration, 2 * h2Duration, -150)
          try {
            setH2Y(
              +window.getComputedStyle(h2).transform.split(',')[5].slice(0, -1)
            )
          } catch (error) {}
        } else if (scrolled < h2Start) {
          // h2.style.opacity = 0
        }
        //skillsTitles appear
        if (scrolled >= h2Duration * 2 && scrolled < h2Duration * 3) {
          changeOpacity(skillsTitles, h2Duration * 2, h2Duration * 3)
        } else if (scrolled < h2Duration * 2) {
          skillsTitles.style.opacity = 0
        }
        //firstItem appear
        if (scrolled >= h2Duration * 3 && scrolled < h2Duration * 4) {
          changeOpacity(firstItem, h2Duration * 3, h2Duration * 4)
          translateVertical(firstItem, h2Duration * 3, h2Duration * 4, '-50%')
          try {
            setFirstItemY(
              +window
                .getComputedStyle(firstItem)
                .transform.split(',')[5]
                .slice(0, -1)
            )
          } catch (error) {}
        } else if (scrolled < h2Duration * 3) {
          firstItem.style.opacity = 0
        }
        //secondItem appear
        if (scrolled >= h2Duration * 4 && scrolled < h2Duration * 5) {
          changeOpacity(secondItem, h2Duration * 4, h2Duration * 5)
          translateVertical(secondItem, h2Duration * 4, h2Duration * 5, '-50%')
          try {
            setSecondItemY(
              +window
                .getComputedStyle(secondItem)
                .transform.split(',')[5]
                .slice(0, -1)
            )
          } catch (error) {}
        } else if (scrolled < h2Duration * 4) {
          secondItem.style.opacity = 0
        }
        //thirdItem appear
        if (scrolled >= h2Duration * 5 && scrolled < h2Duration * 6) {
          changeOpacity(thirdItem, h2Duration * 5, h2Duration * 6)
          translateVertical(thirdItem, h2Duration * 5, h2Duration * 6, '-50%')
          try {
            setThirdItemY(
              +window
                .getComputedStyle(thirdItem)
                .transform.split(',')[5]
                .slice(0, -1)
            )
          } catch (error) {}
        } else if (scrolled < h2Duration * 5) {
          thirdItem.style.opacity = 0
        }
        //firstItem disappear
        if (scrolled >= h2Duration * 7 && scrolled < h2Duration * 8) {
          changeOpacity(firstItem, h2Duration * 7, h2Duration * 8, 1, 0)
          translateVertical(firstItem, h2Duration * 7, h2Duration * 8, '50%', 1)
        } else if (scrolled >= h2Duration * 8) {
          firstItem.style.opacity = 0
        }
        //secondItem disappear
        if (scrolled >= h2Duration * 8 && scrolled < h2Duration * 9) {
          changeOpacity(secondItem, h2Duration * 8, h2Duration * 9, 1, 0)
          translateVertical(
            secondItem,
            h2Duration * 8,
            h2Duration * 9,
            '50%',
            1
          )
        } else if (scrolled >= h2Duration * 9) {
          secondItem.style.opacity = 0
        }
        //thirdItem disappear
        if (scrolled >= h2Duration * 9 && scrolled < h2Duration * 10) {
          changeOpacity(thirdItem, h2Duration * 9, h2Duration * 10, 1, 0)
          translateVertical(
            thirdItem,
            h2Duration * 9,
            h2Duration * 10,
            '50%',
            1
          )
        } else if (scrolled >= h2Duration * 10) {
          thirdItem.style.opacity = 0
        }
        //skillsItem slide
        if (scrolled >= h2Duration * 10 && scrolled < h2Duration * 11) {
          let p1 = skillsTitles.querySelector('p:nth-child(1)')
          let p2 = skillsTitles.querySelector('p:nth-child(2)')
          changeOpacity(p1, h2Duration * 10, h2Duration * 11, 1, 0.5)
          changeOpacity(p2, h2Duration * 10, h2Duration * 11, 0.5, 1)
          if (window.innerWidth > 640) {
            translateHorizontal(
              skillsTitles,
              h2Duration * 10,
              h2Duration * 11,
              -280
            )
          } else {
            translateVertical(
              skillsTitles,
              h2Duration * 10,
              h2Duration * 11,
              '-25%'
            )
          }

          skillsFirstRow.style.display = 'none'
          skillsSecondRow.style.display = 'flex'
        } else if (scrolled < h2Duration * 10) {
          skillsFirstRow.style.display = 'flex'
          skillsSecondRow.style.display = 'none'
        }
        //fourthItem appear
        if (scrolled >= h2Duration * 11 && scrolled < h2Duration * 12) {
          changeOpacity(fourthItem, h2Duration * 11, h2Duration * 12)
          translateVertical(
            fourthItem,
            h2Duration * 11,
            h2Duration * 12,
            '-50%'
          )
          try {
            setFourthItemY(
              +window
                .getComputedStyle(fourthItem)
                .transform.split(',')[5]
                .slice(0, -1)
            )
          } catch (error) {}
        }
        //fifthItem appear
        if (scrolled >= h2Duration * 12 && scrolled < h2Duration * 13) {
          changeOpacity(fifthItem, h2Duration * 12, h2Duration * 13)
          translateVertical(fifthItem, h2Duration * 12, h2Duration * 13, '-50%')
          try {
            setFifthItemY(
              +window
                .getComputedStyle(fifthItem)
                .transform.split(',')[5]
                .slice(0, -1)
            )
          } catch (error) {}
        }
        //sixthItem appear
        if (scrolled >= h2Duration * 13 && scrolled < h2Duration * 14) {
          changeOpacity(sixthItem, h2Duration * 13, h2Duration * 14)
          translateVertical(sixthItem, h2Duration * 13, h2Duration * 14, '-50%')
          try {
            setSixthItemY(
              +window
                .getComputedStyle(sixthItem)
                .transform.split(',')[5]
                .slice(0, -1)
            )
          } catch (error) {}
        }
        //fourthItem disappear
        if (scrolled >= h2Duration * 14 && scrolled < h2Duration * 15) {
          changeOpacity(fourthItem, h2Duration * 14, h2Duration * 15, 1, 0)
          translateVertical(
            fourthItem,
            h2Duration * 14,
            h2Duration * 15,
            '50%',
            1
          )
        } else if (scrolled > h2Duration * 15) {
          fourthItem.style.opacity = 0
        }
        //fifthItem disappear
        if (scrolled >= h2Duration * 15 && scrolled < h2Duration * 16) {
          changeOpacity(fifthItem, h2Duration * 15, h2Duration * 16, 1, 0)
          translateVertical(
            fifthItem,
            h2Duration * 15,
            h2Duration * 16,
            '50%',
            1
          )
        } else if (scrolled > h2Duration * 16) {
          fifthItem.style.opacity = 0
        }
        //sixthItem disappear
        if (scrolled >= h2Duration * 16 && scrolled < h2Duration * 17) {
          changeOpacity(sixthItem, h2Duration * 16, h2Duration * 17, 1, 0)
          translateVertical(
            sixthItem,
            h2Duration * 16,
            h2Duration * 17,
            '50%',
            1
          )
        } else if (scrolled > h2Duration * 17) {
          sixthItem.style.opacity = 0
        }
        //skillsTitles disappear
        if (scrolled >= h2Duration * 17 && scrolled < h2Duration * 18) {
          changeOpacity(skillsTitles, h2Duration * 17, h2Duration * 18, 1, 0)
        } else if (scrolled > h2Duration * 18) {
          skillsTitles.style.opacity = 0
        }
        //h2 to bottom
        if (scrolled >= h2Duration * 18 && scrolled < h2Duration * 19) {
          translateVertical(h2, h2Duration * 18, h2Duration * 19, 150, 1)
        }
        //h2 disappear
        if (scrolled >= h2Duration * 19 && scrolled < h2Duration * 20) {
          changeOpacity(h2, h2Duration * 19, h2Duration * 20, 1, 0)
        } else if (scrolled > h2Duration * 20) {
          h2.style.opacity = 0
        }
      } else {
        main.classList.remove('sticky')
      }
    }

    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [
    firstItemY,
    secondItemY,
    thirdItemY,
    fourthItemY,
    fifthItemY,
    sixthItemY,
    h2Y,
  ])

  return (
    <section className="what h-[7500px] px-[30px] mx-auto">
      <div
        className="main overflow-hidden max-w-[1860px] relative mx-auto bg-[#0F1214] text-white pt-[123px] xl:pt-[80px] xl:pb-[80px] sm:px-[10px]  pb-[100px] px-[40px]  
     rounded-[20px] h-[650px]  
     "
      >
        <h2 className="h2 relative text-[54px] pb-[15px] lg:text-[45px] md:text-[30px] sm:text-[24px] xsm:text-[22px] xsm:leading-[24px] sm:pb-[25px] xsm:pb-[30px]  text-center mb-[40px] opacity-0 top-[30%]">
          Что тебе даст прохождение курса?
        </h2>
        <div className="skills__titles relative top-[-50px] opacity-0 text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px]  xsm:text-[12px] sm:gap-[0px] font-semibold flex gap-[40px] sm:flex-col justify-center items-center translate-x-[140px] sm:translate-x-0 mb-[100px] xsm:mb-[20px]">
          <p>SKILLS UPGRADE</p>
          <p className="opacity-[0.5]">STRONG HARD SKILLS</p>
        </div>

        <div className="skills__items ">
          <div className="skills__firstrow skills__row lg:text-[16px] md:text-[14px] sm:text-[12px]">
            <div className="skills__item">
              <img src={codeImg}></img>
              <p>
                Научишься понимать терминологию, документацию и писать код на
                уровне востребованных разработчиков
              </p>
            </div>
            <div className="skills__item">
              <img src={nanoImg}></img>
              <p>
                твои знания превратятся в систему, ты не просто изучишь
                технологии, но и поймешь как развиваться дальше{' '}
              </p>
            </div>
            <div className="skills__item">
              <img src={webImg}></img>
              <p>
                Создашь Fullstack приложение, которое покажет что твои навыки
                выше чем у стандартного junior{' '}
              </p>
            </div>
          </div>
          <div className="skills__secondrow skills__row lg:text-[16px] md:text-[14px]">
            <div className="skills__item">
              <img src={atomImg}></img>
              <p>
                Создашь с помощью фреймворка React визуальную часть приложения:
                элементы, анимация
              </p>
            </div>
            <div className="skills__item">
              <img src={nodeImg}></img>
              <p>
                Изучишь NodeJS на достаточном уровне чтобы связывать frontend и
                backend
              </p>
            </div>
            <div className="skills__item">
              <img src={nanoImg}></img>
              <p>
                Овладеешь базой, от которого можно отталкиваться и учить любую
                технологию на JavaScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WhatBlock
