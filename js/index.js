/**
 * Created by Administrator on 2018/10/18.
 */
$(function(){
    $('#fullpage').fullpage({
        navigation:true,//右边导航小圆点的显示
        continuousVertical:true,
        afterLoad:function(archoLink,index){
            if(index==1){//进入第一屏的操作
                $('.s1-box').removeClass('s1-box-start');
            }else if(index==2){//进入第二屏的操作
                $('.s2-box').removeClass('s2-box-start');
            }else if(index==3){//进入第三屏的操作
                $('.s3-box').removeClass('s3-box-start');
            }else if(index==4){//进入第四屏的操作
                $('.s4-box').removeClass('s4-box-start');
            }
        },
        onLeave:function(index,nextIndex){
            if(nextIndex!=1){//判断在除了第一屏之外的其他屏都要加上此类
                $('.bg-ball').addClass('rotate');
            }else{//否则移除此类
                $('.bg-ball').removeClass('rotate');
            }
            if(index==1){//离开第一屏的操作
                $('.s1-box').addClass('s1-box-start');
            }else if(index==2){//离开第二屏的操作
                $('.s2-box').addClass('s2-box-finish');
                $('.s2').css('overflow','visible');//解决闪屏问题，记得给s2设置css，不然还是会闪屏
                setTimeout(function(){
                    $('.s2-box').removeClass('s2-box-finish').addClass('s2-box-start');
                    $('.s2').css('overflow','hidden');
                },1000)
            }else if(index==3){//离开第三屏的操作
                $('.s3-box').addClass('s3-box-start');
            }else if(index==4){//离开第四屏的操作
                $('.s4-box').addClass('s4-box-start');
            }
        }
    });
})
