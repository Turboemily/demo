let windowInnerwidth=window.innerWidth;
//修改1
//修改2
//let windowDpr = window.devicePixelRatio;
//图形时间轴
//修改3
export let timeData =  [[1,25,1],[2,0.110,1],[3,217,1],[4,310,1]]
export function typeLine(type) {
  let params=[":00:00",":01:00",":02:00(生效)",":03:00(结束)"];
  if(type=="hour"){
   params=[":00",":00",":00(生效)",":00(结束)"];
  }else if(type=="day"){
    params=["00:00","00:00","00:00(生效)","00:00(结束)"];
  }
  return function(param,api){
    let point=api.value(1)/375*windowInnerwidth;
    let index=param.dataIndex;
    let texts="01:00:00";
    let time=api.value(2)<10?'0'+api.value(2):api.value(2);
    let height = parseFloat(document.querySelector('html').style.fontSize)*0.9796*5.906;
    console.log(height)
    switch (index) {
      case 0:
        texts=time+params[0];
        break;
      case 1:
        texts=time+params[1];
        break;
      case 2:
        texts=time+params[2];
        break;
      default:
        texts=time+params[3];
    }
    return {
      type: 'group',
      children: [{
        type: 'text',
        style: {
          text: texts,
          textFont: api.font({fontSize:10}),
          textAlign: 'center',
          textVerticalAlign: 'bottom',
          fill:'#fff'
        },
        position: [point, height]
      }]
    };
  }
}


// export function renderTimeText(param,api){
//   let point=api.value(1)/375*windowInnerwidth;
//   let index=param.dataIndex;
//   let texts="01:00:00";
//   let time=api.value(2)<10?'0'+api.value(2):api.value(2);
//   let height = parseFloat(document.querySelector('html').style.fontSize)*0.9796*5.906;
//   console.log(height)
//   switch (index) {
//     case 0:
//       texts=time+":00:00";
//       break;
//     case 1:
//       texts=time+":01:00";
//       break;
//     case 2:
//       texts=time+":02:00(生效)";
//       break;
//     default:
//       texts=time+":03:00(结束)";
//   }
//   return {
//     type: 'group',
//     children: [{
//       type: 'text',
//       style: {
//         text: texts,
//         textFont: api.font({fontSize:10}),
//         textAlign: 'center',
//         textVerticalAlign: 'bottom',
//         fill:'#fff'
//       },
//       position: [point, height]
//     }]
//   };
// }

//图形指数轴
export let indexData =  [[1,18,2356],[2,65,2555],[3,115,2658],[4,165,2512]]
export function renderIndexText(param,api){
  let height = parseFloat(document.querySelector('html').style.fontSize)*5.906;
  let point=api.value(1)/221.5*height;
  return {
    type: 'group',
    children: [{
      type: 'text',
      style: {
        text: api.value(2),
        textFont: api.font({fontSize:10}),
        textAlign: 'center',
        textVerticalAlign: 'bottom',
        fill:'#9098AD'
      },
      position: [0.5386*windowInnerwidth, point]
    }]
  };
}


//图形文字位置
export let indexTextData =  [[1,0.693*windowInnerwidth,18],[2,0.826*windowInnerwidth,18],[3,0.693*windowInnerwidth,195]]
export function renderText(param,api){
  let text="投保期";
  let height = parseFloat(document.querySelector('html').style.fontSize)*5.906;
  let point=api.value(2)/221.5*height;
  switch (param.dataIndex) {
    case 0:
      text="投保期";
      break;
    case 1:
      text="保险标的";
      break;
    case 2:
      text="上期结果";
      break;
  }
  return {
    type: 'group',
    children: [{
      type: 'text',
      style: {
        text: text,
        textFont: api.font({fontSize:10}),
        textAlign: 'center',
        textVerticalAlign: 'bottom',
        fill:'#9098AD'
      },
      position: [api.value(1), point]
    }]
  };
}


