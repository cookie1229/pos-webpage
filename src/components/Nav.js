import React, { useState, useEffect } from "react";
import classes from "./Nav.module.css";
import NavLi from "./NavLi";
import Logo from "./Logo";
import { FaList } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Nav() {
  const as = [
    {
      className: classes.lk,
      value: "1. Benefits",
      href: "",
      id: 1,
    },
    {
      className: classes.lk,
      value: "2. Step-by-step",
      href: "",
      id: 2,
    },
    {
      className: classes.lk,
      value: "3. Modules",
      href: "",
      id: 3,
    },
    {
      className: classes.lk,
      value: "4. Enquiry",
      href: "",
      id: 4,
    },
    {
      className: `${classes.contactus}`,
      value: "Contact Us",
      href: "",
      id: 5,
    },
  ];

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    // Clear memory leak
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  console.log("width: \n", dimensions.width);

  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle((toggle) => !toggle);
  };

  function NavLt950() {
    return toggle ? 
    <NavLt950List /> : <NavLt950Hide />
  }

  function NavLt950List() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: 10,
          }}
        >
          <Logo className={classes.logo} value="FOODO 餐飲 POS 管理系統" />
          <ImCross
            onClick={onToggle}
            size={30}
            style={{
              visibility: "visible",
              top: "",
            }}
          />
        </div>
        <ul className={`${classes.lswrap}`}>
          {as.map((each, i) => {
            return (
              <NavLi
                id={as[i].id}
                className={as[i].className}
                value={as[i].value}
                href={as[i].href}
                key={as[i].id}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  function NavLt950Hide() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: 10,
        }}
      >
        <Logo className={classes.logo} value="FOODO 餐飲 POS 管理系統" />
        <FaList
          onClick={onToggle}
          size={30}
          style={{
            visibility: "visible",
            top: "",
          }}
        />
      </div>
    );
  }

  function NavGt950() {
    return (
      <div>
        <Logo className={classes.logo} value="FOODO 餐飲 POS 管理系統" />
        <ul className={`${classes.ls}`}>
          {as.map((each, i) => {
            return (
              <NavLi
                id={as[i].id}
                className={as[i].className}
                value={as[i].value}
                href={as[i].href}
                key={as[i].id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
  return dimensions.width > 950 ? <NavGt950 /> : <NavLt950 />;
}

// (
//     <div>
//             <Logo className={classes.logo} value='FOODO 餐飲 POS 管理系統' />
//             <FaList style={dimensions.width>950 ? {visibility: 'hidden'} : {visibility: 'visible'} }/>
//                 <ul
//                     className={dimensions.width>950 ? `${classes.ls} ` : `${classes.lswrap}` }
//                 >
//                     {
//                     as.map((each, i) => {
//                         return (
//                             <NavLi
//                                 id={as[i].id}
//                                 className={as[i].className}
//                                 value={as[i].value}
//                                 href={as[i].href}
//                                 key={as[i].id}
//                             />
//                             )
//                         })
//                     }
//                 </ul>

//     </div>
// );
