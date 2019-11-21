
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
	contact :'Contact'

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
	contact :'聯絡方式'
    
  }
}