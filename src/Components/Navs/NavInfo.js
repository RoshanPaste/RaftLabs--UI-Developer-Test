import React, { useState } from 'react';
import NavNames from '../../Ref/navNames';
import './style.css';


function NavInfo() {
  const [navItems, setNavItems] = useState([
    {navId:"", label: "Home", link: "https://cdn-icons-png.flaticon.com/128/2549/2549900.png", active: true },
    {navId:"", label: "Analytic", link: "https://cdn-icons-png.flaticon.com/128/3082/3082946.png", active: false },
    {navId:"", label: "Explore", link: "https://cdn-icons-png.flaticon.com/128/795/795653.png", active: false },
    {navId:"", label: "Shop", link: "https://cdn-icons-png.flaticon.com/128/8215/8215477.png", active: false },
    {navId:"", label: "Inbox", link: "https://cdn-icons-png.flaticon.com/128/1370/1370907.png", active: false },
    {navId:"setting", label: "Setting", link: "https://cdn-icons-png.flaticon.com/128/563/563541.png", active: false },
    {navId:"help", label: "Help", link: "https://cdn-icons-png.flaticon.com/128/11123/11123484.png", active: false },
    {navId:"", label: "Amazon", link: "https://cdn-icons-png.flaticon.com/128/6104/6104899.png", active: false },
    {navId:"", label: "Invinity HQ", link: "https://cdn-icons-png.flaticon.com/128/6104/6104899.png", active: false },
  ]);

  const handleNavClick = (clickedIndex) => {
    const updatedNavItems = navItems.map((navItem, index) => ({
      ...navItem,
      active: index === clickedIndex,
    }));
    setNavItems(updatedNavItems);
  };

  return (
    <div className=''>
      <div className='flex'>
        <img
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABWCAYAAAC6lArJAAAACXBIWXMAABJ0AAASdAHeZh94AAAPjElEQVR4Xu1caXAV15W+vb5Fek/bkwRajCwJBYGMbXDAhNUx2SA1YxJPxjXDVMX555lUUlmqkkqlZlxJJalUTLlcGTuuZGI743IcJ/GSeMGOwQRshmBsgy1HgEC70PYkPS1v69dbvtPiTWGM1P30+iGq0pdqEPS959779elzz/nOaRjzmoeAh4CHgIeAh4CHgIeAh4CHgIeAh4CHgIeAh4CHgIeAh4CHgIeAawhwrklySZCumwuuSRA406WpCi7mmgF3alLjsdsIruyaCMQskDp+1nCpuDKl5SL9/ZpvSw7uQ/eN3x2fNbdyPFsBtKpwFePy45IvXsJFwA38SZcOyAXZz7RwidBbUsofDxbxZysqxcMf3RR851pCfMnB/fd/u3BsZlpfJUlcqR0wliobJuM4jpmmySSJZ6XlAvP5OVZaxg9WVAqdkSrpzcoq4clN24res5NX6PtLCu5Lz8189OknZx4L+NlqXlh4KcDSshKSyDNNNwDuHMAaDIUBfdbUuZ8J6EiVMNq2zn9sVav/O+tvDZwuNIjzySc7t2RtdspYn0mbITtgaYEEoA4AK5cLTIDGGrrJeJ5jso9j/gDHisPQ4gqewVywiXG9ev8z8TsefmCy46F944+/+1Zy+VJscknBnZ7WV/L8/x9a8+7fJEvLG8wXEBheeSYCVAL7Sg3ehAV2WYRnomCwd06k9/7q51NDv3xw8rdXG+AlA/fF52b29HQpDXiNS+w2DfeMyTAHtXUiQCXzYe+NwSwzERouS4wlEzprfyf1Tw/8KPpyR3uq3G4+t+4vCbjd5xS+45SyZ2zUqJdl5gBcsqW8Wd8oteuqkcKZ5qjNAcxZIKeSJnvvZPpTB/cnnj56ONHqSECenZYE3CMHk/85MqRFEA+0ObG3pLmBAD/U1OSf1nU27UBxPwALTA9sMcd8sM9HXk3sOPRS4tEjB+O35Imd7fCrDu7hA4l12OA/TE1pzf4gH7BbIXkJasbMwJeN1V8vjSDGSMx5Drm1rBYvrxdZ+7vpja++EH/y9Pvp6tyk5Nb7qoL7/DMzX3jqf6d/6fObOsBa6WSpqmoq4VJhcHmNmCqPCFFeYOpiwL10rkg1z8aGteZHH5ruGB5SS52sYzF9rgq4f303Vfzozybve+NA/GuqpnOCyN9CmuSkpRLm7IrrpbFVbb4eeLadGJfCuCEnY+frQy6cIJlsekorf+bX038e7M/YvkGLmU9czCAnY7rPKw3TMX3F6LC+9tAric/3dqmRaFQvCYf5OoS6jpqumZokc+n6BjnV0CSd1DQmwAVTE3FDSSUMy8cVRDqwGCMXzOkDo354wExHMPL+KeXG1jXKvomo9mWE0PM4eI6W+6FOroGbyRihrs7MjvisIccm9I1HX0vuHRlWl3d1qiyT1pno49PgAYgzcNTo1U8mTbOhQbrQ1CLvx8bb0wg4Wlrl14pD/PrJqK4mU2ZESRvl0aiG6MxgHGmkQ5AJYNnHs6lJnb19PH1PeaV4CAv7naPFOezkGrjplNn0+C9ifxzs1RCW4tiBdoqQ7oNDXxQWSKtyAtYwTFXPsPGN24IdMAv92M/bfj9n7twVKsLPKh6iPzqq+fr7VOMvhxOR4UGdpVIA2DcXuTnRYuoTLuXZ6fY0a2n1fTU+q79SHBJmHGJn2801cDFTbSDIsXAZQi6gSxq02KZp4AkyrH/r7UUnV6/1/095RDRB1kQvynssK1dVjX+uqZMeXL8hMAnfmTv8p2TZO8dTTA6Y5Bc7ApgehAmyDQHN5vOd0tch+97FrvvycQ6tn6PpXHHMiYCBxvbh1e/dtrPoR5FKUcSDOnalFYAVe8of4COhsFDR1OLz774zpO75lzAzQOqkk8a8IfKlsizzgAfR262xM+3KfymKUeZotw46uam5qxzMt2AXAjYDja2tlzo23xZ8pG6FOAaXzRFHi9c5CLs/6pO5KlVh7MihBLQfnDoOLgoiFmqyzLGZmAqARTY0oD2BN+IOPLhMvvtxU3OJ7F50g2dAlOEwgG3fsNn/yse2BV8MBPkLuQiUZb66ukZ8fcenitiatTIIHJ4CEFsRlveAEHlmSmdnOpTPYB2uaK8r4MLG1mAHlba7mKeDAQVLKUY0WCR0bfl48JHde0oeKCrm07CH9shcJhMat42I8917wqxqmcQyCnG/9iujwzcBgqfrtAIXzWyyH2HfwxVwMQ08TUaneM5NScOZn9GNYr/YddfdJfd9YlfoGRKCA8wBJFeeDkRN/bIakTWvkll5BQFsL0oAuDBJbGhIA7js1pw3coUBboFLcux3cMkCaMOxcR2pGm5s646iF+/5RsW9t24J/sGNTZEMBBePrV7rY00tIoObaCvWSh0hQgGBD4rSvAN2N29s3DrQKBsbX2gH9GoSu6Ujh5sG/Vdazo+sbA2cXbXaNwQf842GZulVWwRy6ACw7kZu7ovLamQcaAo8hzn/d75m+cX4zYDtj02oW8Olcgj/Mp3DlB/q6ha4lPLO+qGWDlP2wKRflJ6hn7E5SeSUcEToCwa49PXN8nDbzf5zTSt9h0Nh/gWA4WroSTuFXFZeKTBEhiydpnB5YagsGh655tikwWrrLbvryFOZT6pb4JLbQlGUZRsoBWOQydTwquFPAX4nj1CzslpQbrjZ3912k+94Ta3UBzdrAKAeyEc7bMY+C4D3LEcGo7NDsbiIBRtuU0hBDwIKkTcd6Ra4s1h0Hy2cXnsKKStJY8pEVlEuDjavkf+vtkZ6M1DEd/r8bIyiTuIB0FwLNecB7TVR5PbArjsOKEgxSHPhcy/a+8muxRVwoX0Z2LdBEgq+laVmdTYMQxEd1VmPlKk705H+AsLRndjomCSxKIAV4QzUt7b5Tk6Ma9+tiIiFqzHAM7QLIi5/MJZJg9ud7xvlCrgXFzFqETakvUgi6iBRSAtoodERuDcaK8d9Sg5SJJeZmjBkgN2HsLUOfy8UuDJFfSl4C/TQbdtFwqmoyGLXLGXJp7kGLg7aaCCImgIB9B8ABXCXrOtDto78YqZqLAhudgOCkP35+LULALCXmLKpGIhgB0QSnRcczofiEh6uHOvMB1jrLc5XQHY8Xr3JZTUoLZJRsGF/7iMbwdjUuL5qPKpvg4yCZAIQDNwcn4FrFTWYRJVndu1i6R+oTVZWLiJfl19zDVzwt4mSsDAl4PBwEm6SJsWTemA6pjViC835bePKo8fHNDY+qjEF/MJCPm52dDZlHw5bxHnezTVwBZ5LVFSLj1D62oHmWppEB975sypSQdq3weE6sYqONwxTc2igD0zQkGrZWzvynBSCqAyiHyNV/E8cT7RAR9fAxQaSNbXiszLYJTpE7BppLgUWI8MaO/VWajvYq+12Y3K5j5B3x7kzGXZhULXqFewaRY+0pqplPPrzp+z6O7nvGrhgo4zKKrHdqtECP0qLtWtUkTiDw+b1A8kaFIn8MJ0yWuzGOLmfiOvm+bMZdrYjDbs+l8i0a+SfB3EgNzbLLFQiDNv1d3LfNXBpsuKwML2iUbq/CsVyqgOqmTSFPItROMWvPB/fODqi/hCESV6REQE7PKixRx6aZCMDGvJ39sDS2kkZyEtYc6P/i06Ac9LHVXBpwkiVeBxP3hFJTf0pC+BD7u3owQQ79KfE7oFe9b9hL693svhL+2BMKJU0zO5zKntw3wRLzoLLQErUyUFGcpJxi/tgN9wc+FWuc8/X33Vw8Vq9tKJR/g3qv6mG1lZ/6aAhAPwo1n/3hOLf/1z8zhPHUk8jE3snmCwKOhZsADWMKzo5rs+cOJZkLz47bdGGkn+uAt3uICPhREle1yix1ht8rlGeJNfZO2O3w8vu/+WNxOdf/mP89/09GYaMgqMNkgiky63+9Sskc+UqXzdMTLx6mYh6B+FNpGyegm/cgW5kzKtR5vRZBCD3AVQ2Oa6xvh6NnUMWoeu8YgUwxCc4AZbmnRjT2cd2BM/t3FW85SOr/WM5bnfe7q5FaJfOUHeddKztJv++gW71G8AiihL7SicbRcbXMicd7Qr315OZptU3yWmAPFK9TLqtOMxtR/VNQOBZEE5GEIdfWQwFHX2ok+jvzrDhfpWlMdYKXT8QHS4MFWVCKqooa+E74CawBdNcEny6PXXLz38aO5FO6O8j+deWK3lC5DbZQZQwwbzQOwZEcZoHAB4qb5iSAPFuEeDIMYGnJY/ggyG3vf6RPz6LpOTtu0Ovb9kR3NW40rcg4W8v8YM9CmIWaAoUufGdHZldD98/+TyAeQ+v+9pcF3dpf4sEgqdvEdoWCTBXH7bYRvIoeYkaCfYf36rYsG5D8MRiZc03zvUDLTtRSaloNK6Ujm7YEvh1MMiHErPGQD6LJw21ypRwUcF0PsDSw8koyN/JAvvSV8r3FQJY2mvBwCXhFZVS7LZPFv2kZbWvAwfSBFylWD4Ak93OXvnIic8YqFQX2cZNgZ7N24u+mY+shcYWFFyauKXVf2rTtuD9zS3yOCbrVxQz5oTYKcSGrcpJ2GrKrSEpGt/88eDWQsyTlVlwcGmiW24NHoSr8+Oa62RJTZnDOKzev9oAW9lnhIPkjbTd6B/69D8W3wSiPqeKnlwfxOJPhFxnQv/erkz9y8/P/uDoweTnfAHW5w9y+A6Ns4jzQjb4xKgRRuIxxbE9d4Ve2rgl8K8oqJ4q5Jwk+6qCSxP29Sj+46+n7n37zdSdoxf0ENwoGaWnpYXYKLlz9IkUfRRYs0JkOz9d/O3NtxX/uBBzXUnmVQeXFjHQmwmdP5O560xH5u6+nvSGgR5NoM9Ls+X3+WyeXn8CNYNKR6p2rGsQ2UqUNSGo2bt+Y/CJfGTnOnZJwM0uEpRg4+l25R5Udn9zetpIzsSMoAYHVKTSe5wGWW5goeiOwJy7UMJ8sfiEnKByUJ9l+KJ9zY2Bt1HWtLehUT6TKzj59l9ScLOLHxtRa48dSX3v+BvJL8WiOuPwpQ0BRZ8Fk09Lvu2VALaKT0AVUgEKp8P/JRII8TFKpdim7cHoug2BXctqpLfyBWmx468JcGnxyaTBoxq8dmRIvb27U/1+b0+mbhQpmsF+zaotI74gG0JnU/acCC4BIXFNncCqlkus6SMyyG7p9ygd/SmIm6Oo713S/1HkmgE3qx2okQ0mE8Y6ALoZPvFqVEPWoLyoCv92HVgw6+Aj5gz1tBlwCWJRSBgFr5BBRfkwKnpeQInUPnzKml6strk57poD9/LNwZbycKV8YK8C4AIoBW/gE6eUIDANIbAOYJVCFPG5CbIny0PAQ8BDwEPAQ8BDwEPAQ8BDwEPAQ8BDwEPAQ8BDwEPAQ8BDwEPAQ8BD4O8Wgb8BR14DvtY+81wAAAAASUVORK5CYII=' 
          alt='Logo' 
          width={40}
          height={40}
          className='mt-4 ml-7 my-3'
        />
        <p className='nav-text text-2xl text-gray-600 font-bold mt-5 ml-1'>Omoi</p>
      </div>
      <div className='ml-6 select-none'>
        {navItems.map((navItem, index) => (
          <NavNames
            id={navItem.navId}
            key={index}
            link={navItem.link}
            label={navItem.label}
            active={navItem.active}
            onClick={() => handleNavClick(index)}
            
          />
        ))}
      </div>
      <div className='navs-heading'>
        <div className='ml-6 -mt-56 mb-24'>
          <p className='text-sm text-gray-400 mb-3'>Tools</p>
        </div>
        <div className='ml-6'>
          <p className='text-sm text-gray-400'>Projects</p>
        </div>
      </div>
    </div>
  );
  }

export default NavInfo;



