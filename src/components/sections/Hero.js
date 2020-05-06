import React, { Component } from 'react'
import { StyledHeader } from '../styles/StyledHero'

export default class Hero extends Component {
    render() {
        return (
            <StyledHeader>
            <div>
                <h3>About</h3>
            </div>
            <div className='hero-style' >
               <div className='container-image'>
                   <div className='image-style'>
                      <img  src={'https://avatars1.githubusercontent.com/u/11736897?s=460&u=1c42b97135cabda8a534058586e1ec258a5d63e6&v=4'} alt='Hero'/>
                   </div>
               </div>
               <div className='container-info'>
                  <h4> About me </h4> 
                  <p>lorem ldlvn i rgroijgjr vrvrnkne c;aSn csd;cnd;v io n ksdc ;lkn dfoi dncodsc dknldkncd cnd ncdn
                      ncdcndkcnkncldn
                      dpcd pcdc 'mdck sdjk jdskvj dvmdvnvndv;najvnnvd;ladvhuv a ' ;OWOFEnnn;njvndjvnodvoiifhe80949r
                      efieckenkenckcneihehnvenvjnecine hfhh lj ljr ;kj ;kmd a;k djk;a;jd ; j dn cm ;k jka;kjaj ; jevevv
                      hbhblkbblabjb j ;jk ;ajdlcbudbciub7r7474pc pabfjqfjjia efbfpuiqbpiuajdc ;acbj ;qj ;qfb;j ;j ;j;bcjj;;
                      qlafh  rhf;bciquhf pija cj a ;ainj; a;rjruipriuij ;aj ;jd ;adja;jbf;ja r;jbjuifriufui a; ;fbqrjf q;j fq
                  </p>
               </div>
            </div>
            </StyledHeader>
        )
    }
}


