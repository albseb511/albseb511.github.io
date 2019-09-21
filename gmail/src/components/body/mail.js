import React from 'react'
import styleMail from './mail.module.css'

const MailRow = (props) => {
    console.log(props.data)
    return(
        <div className={`${styleMail.mailRow}`} key={props.key}>
                <div>
                    <input type="checkbox" />
                </div>
                <div>
                    <input type="checkbox" />
                </div>
                <div>
                    <input type="checkbox" />
                </div>
                <div>
                    {props.data.name?props.data.name:'Sender'}
                </div>
                <div>
                    {props.data.content?props.data.content:'Email content'}
                </div>
                <div>
                    {props.data.date?props.data.date:'Date content'}
                </div>
        </div>
    )
}


export default class Mail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tabs: [{label:'Primary',
                    status:true    
                    },
                    {label:'Social',
                    status:false    
                    },
                    {label:'Promotions',
                    status:false    
                    },
                    {label:'Updates',
                    status:false    
                    }],
            mail:[{name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},
                    {name:'Masai School',
                    content:'Fw:Full Stack Development. Get industry ready with our courses co-created with industry leaders. Build practical skills by working on projects based on challenges faced by industry leaders. ',
                    date:'Sep 20'},

                    ]
        }
    }
    render(){
        return(
            <div>
                <ul className="nav nav-tabs">
                    {this.state.tabs.map(item=>{
                        return(<li className="nav-item">
                                        <a className={`nav-link ${item.status?'active':''}`} href="#">
                                        {item.label}
                                        </a>
                                    </li>)
                    })}
                    
                    
                </ul>
                <div className={styleMail.mailBody}>
                    {this.state.mail.map((item,index)=>{
                        return(
                            <div key={index}>
                                <MailRow data={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}