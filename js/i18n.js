
const messages = {
  en: {
	my_name: 'Billy Huang',  
	job_name: 'TrendMicro - Senior Backend Engineer',
	work_experience_name: 'Work Experience',
	work_experience1:{
		title:'Senior Backend Engineer - TrendMicro ,  2017.10 - present',
		intros:['Developing WCF service via C#',
		'MSSQL DB schema design (table design & stored procedure design)',
		'Developing utility tools for debugging',
		'Developing RESTful service via JAVA',
		'API design document',
		'DynamoDB schema design'
		]
	},
	work_experience2:{
		title:'System Software Engineer - Acer ,  2014.11 - 2017.10',
		intros:['Windows tool & application developer via C#',
		'Product(Laptop/Desktop) quality verification tool',
		'3D Camera color calibration tool',
		'9DoF Sensor application for VR project',
		'Developing the UEFI-Shell GUI tool',
		'Developing UEFI BIOS for Laptop',
		'Insyde UEFI Training(3 months)'
		]
	},
	education_name: "Education",
	education1:{
		title:'Master\'s degree, CSIE, NTUT，2012.09 - 2015.07',
		intros:['Courses: Object Oriented Analysis and Design, Embedded system, Interaction of embedded convergence platform, Digital image processing',
		'Masters thesis: Real-time detection and recognition techniques of traffic signs, guideposts and lanes for embedded driver assistance systems'
		]
	},
	education2:{
		title:'Bachelor\'s degree, CSIE, NTUT，2008.09 - 2012.07',
		intros:['Courses: Software engineering, Algorithms, Database system, Introduction to embedded systems, Object-oriented design, Digital image processing',
		'Final project: Motion Sensing Game with Kinect Sensor - Move Your Body'
		]
	},
	achievement: 'Achievement',
	achievements: [{title:'Nov 2014 : Work for Acer with R&D Substitute Services',html:""},
	{title:'Apr 2016 : Hackathon 3rd award',html:""},
	{title:'Mar 2016 : Part time job for web development',html:""},
	{title:'Oct 2016 : LOL company competition - Champion',html:'<a href="https://www.youtube.com/watch?v=nKpaExWiTi8#t=2h0m15s"target="_blank" class="btn_green btn_go r5"> video link </a>'},
	{title:'Oct 2017 : Start work for TrendMicro - Senior Backend Engineer',html:""},
	{title:'Nov 2018 : TrendMicro AI Contest in Fukuoka (Top 15 in 300 teams)',html:""},
	{title:'Dec 2018 : Employee of the Quarter award',html:""},
	{title:'Jun 2019 : AWS Taipei Summit DeepRacer 13th',html:'<a href="https://aws.amazon.com/tw/deepracer/schedule-and-standings/leaderboard-taipei-summit/"target="_blank" class="btn_green btn_go r5"> link </a>'},
	],
	portfolio: 'Portfolio',
	skills: 'Skills',
	more: 'More',
	skill_set: 'Skills',   
	expand : 'Expand',
    collapse : 'Collapse',
	detail:'Detail',
	contact :'Contact',
	portfolioMap:{
		usedCarHelper:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>Finding a used car chatbot",
			subTitle:'Its very helpful to find a used car for me, </br> because I have no enough budget to buy a new one.',
			detail:'Onw'
		},
		kinesisViewer:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>Kinesis Event Viewer",
			subTitle:"Its a tool to easily watch events from AWS Kinesis",
			detail:''
		},
		drawBot:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>Draw a picture chatbot",
			subTitle:"Its a funny chatbot in the friends group",
			detail:''
		},
		fishRecognition:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>Fish Recognition",
			subTitle:"Hackathon, its my first time to join this kind of competition",
			detail:''
		},
		jpInputToChinese:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>Using JP input to construct Chinese character",
			subTitle:"If we only have Japanese input, </br> how can we type a Chinese character?",
			detail:''
		},
		horseReservation:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>A reservation system for equestrian",
			subTitle:"Customer can reserve a coach who is teaching equestrian",
			detail:''
		},
		luceneAPI:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>Developing an API to search books base on Lucene",
			subTitle:"Its a search system",
			detail:''
		},
		dominosAPI:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>Provide an API to order dominos pizza",
			subTitle:"Its an order pizza api",
			detail:''
		},
		threeDCamera:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>Testing tool for 3D Camera",
			subTitle:"To valid device",
			detail:''
		},
		autoPunchIn:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>Automatically punch in",
			subTitle:"For punching in",
			detail:''
		}
	} 

  },
  
  /*    <h5 v-html="$t('work_experience')"></h5>               
                    <p>Aug 2014 : 從學校碩士班畢業</p>                  
                    <p>Nov 2014 : 進入Acer當研發替代役 - System Software Engineer</p>
                    <p>Dec 2014 : 開發Intel RealSense 深度攝影機相關應用軟體</p>
                    <p>Feb 2015 : 使用.Net C#開發軟體(測試工具,API,APP)</p>
                    <p>Mar 2015 : 專案 : 筆電UEFI平台開發(A build)</p>
                    <p>Nov 2015 : Insyde 受訓3個月</p>
                    <p>Mar 2016 : 開始在下班時兼差開發Web(Asp.Net MVC)</p>
                    <p>Apr 2016 : 參加人生第一次的黑客松,作品在下方</p>
                    <p>Oct 2016 : 代表公司參加LOL公司對抗賽(我打TOP) - 冠軍 <a href="https://www.youtube.com/watch?v=nKpaExWiTi8#t=2h0m15s"
                            target="_blank" class="btn_green btn_go r5">比賽影片點我</a>&nbsp;<a href="https://www.youtube.com/watch?v=pIEMidluo98"
                            target="_blank" class="btn_green btn_go r5">還有我</a></p>
                    <p>Feb 2017 : 開發9Dof Sensor相關應用</p>*/
  
  //////////////
  //中文////////
  //////////////
  cn: {
	my_name: '黃臣逸',
    job_name: '趨勢科技 - 後端工程師',
	work_experience_name: '工作經驗',
	work_experience1:{
		title:'Senior Backend Engineer - 趨勢科技 ,  2017.10 - 現在',
		intros:['Developing WCF service via C#',
		'MSSQL DB schema design (table design & stored procedure design)',
		'Developing utility tools for debugging',
		'Developing RESTful service via JAVA',
		'API design document',
		'DynamoDB schema design'
		]
	},
	work_experience2:{
		title:'System Software Engineer - 宏碁 ,  2014.11 - 2017.10',
		intros:['Windows tool & application developer via C#',
		'Product(Laptop/Desktop) quality verification tool',
		'3D Camera color calibration tool',
		'9DoF Sensor application for VR project',
		'Developing the UEFI-Shell GUI tool',
		'Developing UEFI BIOS for Laptop',
		'Insyde UEFI Training(3 months)'
		]
	},
	education1:{
		title:'資訊工程研究所, 國立臺北科技大學，2012.09 - 2015.07',
		intros:['重要課程: 物件導向分析與設計,嵌入式系統,嵌入式匯流平台之人機互動,數位影像處理',
		'畢業論文: 整合即時道路路標路牌與車道線偵測辨識技術的嵌入式駕駛輔助系統'
		]
	},
	education2:{
		title:'資訊工程系, 國立臺北科技大學，2008.09 - 2012.07',
		intros:['重要課程: 軟體工程,計算機演算法,資料庫系統,嵌入式系統導論,物件導向設計開發,數位影像處理',
		'畢業專題: 以體感器實作之Kinect體感遊戲 - Move Your Body'
		]
	},
	achievement: '成就',
	achievements: [{title:'Nov 2014 : Work for Acer with R&D Substitute Services',html:""},
	{title:'Apr 2016 : Hackathon 3rd award',html:""},
	{title:'Mar 2016 : Part time job for web development',html:""},
	{title:'Oct 2016 : LOL company competition - Champion',html:'<a href="https://www.youtube.com/watch?v=nKpaExWiTi8#t=2h0m15s"target="_blank" class="btn_green btn_go r5"> video link </a>'},
	{title:'Oct 2017 : Start work for TrendMicro - Senior Backend Engineer',html:""},
	{title:'Nov 2018 : TrendMicro AI Contest in Fukuoka (Top 15 in 300 teams)',html:""},
	{title:'Dec 2018 : Employee of the Quarter award',html:""},
	{title:'Jun 2019 : AWS Taipei Summit DeepRacer 13th',html:'<a href="https://aws.amazon.com/tw/deepracer/schedule-and-standings/leaderboard-taipei-summit/"target="_blank" class="btn_green btn_go r5"> link </a>'},
	],
	portfolio: '作品集',
	skills: '技能點',
	more: '更多作品',
	skill_set: '技能點',
	expand : '點我展開',
    collapse : '點我收合',
	detail:'詳細',
	contact :'聯絡方式',
	portfolioMap:{
		usedCarHelper:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>中古車小幫手",
			subTitle:"自己用的超實用買車chatbot",
			detail:''
		},
		kinesisViewer:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>Kinesis Event Viewer",
			subTitle:"可以輕鬆觀察丟到AWS Kinesis上的資料",
			detail:''
		},
		drawBot:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>抽抽機器人",
			subTitle:"有趣的抽圖機器人",
			detail:''
		},
		fishRecognition:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>魚群辨識",
			subTitle:"一個黑客松的比賽",
			detail:''
		},
		jpInputToChinese:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>日文輸入法打中文小工具",
			subTitle:"用日文輸入法 打出中文",
			detail:''
		},
		horseReservation:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>馬場預約系統",
			subTitle:"管理客戶預約資訊的工具",
			detail:''
		},
		luceneAPI:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>搜尋引擎WebAPI",
			subTitle:"Luecne.Net搜尋引擎",
			detail:''
		},
		dominosAPI:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>達美樂訂披薩API",
			subTitle:"訂披薩",
			detail:''
		},
		threeDCamera:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>測試3D camera的程式",
			subTitle:"專為3D camera開發",
			detail:''
		},
		autoPunchIn:{
			title:"<i aria-hidden='true' data-icon='&#x5b;'/></i>自動打卡小工具",
			subTitle:"幫忙自動上班打卡",
			detail:''
		}
	}
    
  }
}