<template>
	<div class="newsContent">
		<mt-header title="火箭VS勇士第二场,哈登45+20+10拿下比赛">
			<router-link to="/header03" slot="left"><mt-button icon="back">返回</mt-button></router-link>
		</mt-header>
		<div class="msg">
			<h3>火箭去年和勇士打抢7，常规赛也是3-1，为何季后赛赢1场都难？</h3>
			<span>
				<img class="icon" src="../../assets/images/bask.png" />
				{{ time }}
			</span>
			<p>
				火箭队目前已经是大比分0-2落后于勇士队了，虽然在过去的10年时间里，联盟曾出现多达6次在0-2落后的情况下翻盘，但概率终究是很低。并且这支勇士队在经历过16年总决赛被1-3翻盘之后，对待任何一个对手都已经是非常小心了，哪怕去年总决赛3-0领先于骑士队，也不愿意节外生枝，放水一场回自己的主场夺冠。所以其实这个系列赛的胜利的天平，已经是严重向勇士队这边倾斜了。回想上赛季，火箭队可以和勇士队拼到抢七，今年的常规赛也是3-1胜过于勇士队，为何到了季后赛想赢1场都变得如此艰难？主要原因有3个。
			</p>
			<img src="../../assets/images/1.jpg" />
			<p>
				第一：去年的火箭队实力比今年更强，上赛季火箭队的常规赛战绩是65胜联盟第一，今年则是53胜联盟第6，虽然这其中有本赛季伤病过多的原因，但全员的火箭队，统治力也确实不如上赛季。阿里扎和巴莫特的离开，让火箭队的锋线实力一下就跌到联盟倒数了，塔克身高不足，抢篮板有劣势，火箭队的首发竟然有4人身高不足2米，所以两场比赛火箭队一共输了16个篮板球，他们总共也才输了10分，少丢几个篮板球，结局都会不一样了。
			</p>
			<img src="../../assets/images/2.jpg" />
			<p>
				第二：今年的保罗不是去年的保罗，上赛季虽然保罗也只打了58场常规赛，但是能以46%的命中率拿到18.6分7.9助攻，依然是顶级的控场大师和关键先生。而本赛季的保罗，41%命中率拿到15.6分，明显下滑了许多。上赛季的西决，火箭也正是靠着保罗的关键发挥，才能在G4和G5赢下比赛，而G6和G7没了保罗，火箭队也都在下半场崩盘。而到了今年，保罗神奇不再，火箭队除了哈登以外没有其他位置比勇士有优势。
			</p>
			<img src="../../assets/images/3.jpg" />
			<p>
				第三：勇士已经破解了火箭队的战术，火箭去年用无限换防来限制勇士队的传切战术，逼迫勇士进行大量他们并不擅长的单打，整个系列赛勇士场均只有21次助攻。而本赛季，勇士率先变阵，把伊戈达拉派上首发，开局就打出五小阵容，传切战术再次运转起来，两场比赛都是24个助攻，火箭队的防守策略对于勇士队来讲已经失灵了，可是他们也并没有更好的办法了。
			</p>
			<img src="../../assets/images/4.jpg" />
			<p>
				第四：哈登在第2场意外受伤，哈登几乎承担着火箭队一半的进攻任务，眼睛意外受伤让他难以发挥出自身的水准，比赛当中甚至惧怕强光，要用手去遮挡，而火箭最终也只是输了用了队6分，如果哈登没受伤的话，还是有可能取胜的。
			</p>
			<img src="../../assets/images/5.jpg" />
			<p>
				虽然火箭队现在处于极度不利的形势，但他们向来都是一支顽强的球队，15年也曾在1-3落后情况下翻盘快船，所以相信火箭队还是会和勇士抗争到底，回到主场才是系列赛真正的开始。
			</p>
		</div>
	</div>
</template>

<script>
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
export default {
	data() {
		return {
			time: year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minute + ':' + second
		};
	}
};
</script>

<style scoped="scoped">
.msg {
	width: 90%;
	height: 560px;
	padding: 10px;
	overflow: scroll;
	margin: 0 auto;
}
.icon {
	width: 30px;
	height: 30px;
}
p::first-letter {
	font-size: 2em;
}
p {
	line-height: 30px;
}

img {
	width: 98%;
	height: 230px;
}
</style>
