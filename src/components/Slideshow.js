import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import classes from './Slideshow.module.css';


// const spanStyle = {
//     padding: '20px',
//     background: '#efefef',
//     color: '#000000',
    
//   }


  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: [
        {
          h2: '1.排隊',
          one: [
            { value:'-自助派籌系統' },
            { h4: '減輕高峰期員工工作量' },
          ],
          two: [
            { value: '-實時更新鋪面檯況' },
            { h4: '靈活管理座位' },
            { h4: '提升翻檯率' },
          ],
        },
      ]

    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: [
        {
          h2: '2.落單點菜',
          one: [
            { value: '-侍應手機落單/QR Code手機自助落單，' },
            { value: '訂單同步傳輸至後廚展示系統（KDS)' },
            { h4: '加快落單，送餐流程' },
            { h4: '減少錯單、漏單率' },
            { h4: '提升服務質素，可隨時隨地更改餐牌' },
            { h4: '使用電子餐牌可減少餐牌製作及更換成本' },
          ],
          footer: [
            {value: '*餐飲POS 點單頁面'},
            {value: '*手機QR-Code 自助落單頁面'},
          ]
        }
      ]
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: [
        {
          h2: '3.埋單結賬',
          one: [
            { value: '-支援多種支付工具，自訂折扣優惠' },
            { h4: '讓餐廳服務更貼心、更彈性、幫助吸引客戶' },
          ],
          footer: [
              {value: '*結帳頁面'},
          ]
        }
      ]
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: [
        {
          h2: '4.運營管理及會員系統',
        one: [
          { value: '-餐廳後台經營分析，' },
          { value: '提供即時銷售報表' },
          { h4: '餐廳營銷情況清晰化' },
          { h4: '幫助制訂及調整未來經營方向' },
          { h4: '隨時隨地查閱' },
        ],
        two: [
          { value: '-客戶關係管理' },
          { h4: '提供會員管理平台，為會員提供積分折扣禮券等優惠,' },
          { h4: '增加顧客忠誠' },
        ],
        three: [
          { value: '-員工管理系統' },
          { h4: '管理員工權限，員工公告佈告欄，提升店鋪運營效率' },
        ],
        footer: [
            {value: '*營業報告頁面'},
            {value: '*會員管理頁面'},
        ]
        }
      ]
    },
  ];
  
  // <Slideshow />
  const Slideshow = () => {
      return (
        <div 
          className="slide"
          // style={{
          //   display: 'flex', 
          //   flexDirection: 'column',
          //   height: '1000vh',
          //   paddingInline: '2% 2%',
          // }}
        >
          <Slide
            slidecount={1} 
            slidesToScroll={1} 
            slidesToShow={1} 
            indicators={true}
          >
                {/* Structure: 
                  slideImage.map(slideImage)
                    slideImage.caption(header)
                    <img slideImage.url /> */}

                {/* Container:
                    slideImage.caption
                    <img slideImage.url /> */}
                {slideImages.map((slideImage, index)=> (
                  <div className={classes.container} key={index} >

                    {/* Mapping slideImage.caption for Side Text*/}
                    {/* Check slideImage.caption is an Array before mapping */}
                    <div className={classes.sidetext}>
                    {Array.isArray(slideImage.caption) && slideImage.caption.map( (header, index) => 
                         <div>
                         <h2 className={`${classes.h2}`}>{header.h2}</h2>
                         {header.one && header.one.map( (sub) =>
                         <div>
                             <h3 className={`${classes.h3}`}>{sub.value}</h3>
                             <h4 className={classes.h4}>{sub.h4}</h4>
                         </div>
                         )}
                         {header.two && header.two.map( (sub) =>
                         <div>
                             <h3 className={`${classes.h3}`}>{sub.value}</h3>
                             <h4 className={classes.h4}>{sub.h4}</h4>
                         </div>
                         )}
                         {header.three && header.three.map( (sub) =>
                         <div>
                             <h3 className={`${classes.h3}`}>{sub.value}</h3>
                             <h4 className={classes.h4}>{sub.h4}</h4>
                         </div>
                         )}
                         </div>
                      )}
                    </div>

                    {/* Mapping <img slideImage /> */}
                    <div 
                      className={classes.slideimage}
                      style={{'backgroundImage': `url(${slideImage.url})` }}>
                    </div>
                  </div>
                ))}
          </Slide>
        </div>
      )
  }

  export default Slideshow


  