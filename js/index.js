/**
 * Created by Administrator on 2018/10/18.
 */
$(function(){
    $('#fullpage').fullpage({
        navigation:true,//�ұߵ���СԲ�����ʾ
        continuousVertical:true,
        afterLoad:function(archoLink,index){
            if(index==1){//�����һ���Ĳ���
                $('.s1-box').removeClass('s1-box-start');
            }else if(index==2){//����ڶ����Ĳ���
                $('.s2-box').removeClass('s2-box-start');
            }else if(index==3){//����������Ĳ���
                $('.s3-box').removeClass('s3-box-start');
            }else if(index==4){//����������Ĳ���
                $('.s4-box').removeClass('s4-box-start');
            }
        },
        onLeave:function(index,nextIndex){
            if(nextIndex!=1){//�ж��ڳ��˵�һ��֮�����������Ҫ���ϴ���
                $('.bg-ball').addClass('rotate');
            }else{//�����Ƴ�����
                $('.bg-ball').removeClass('rotate');
            }
            if(index==1){//�뿪��һ���Ĳ���
                $('.s1-box').addClass('s1-box-start');
            }else if(index==2){//�뿪�ڶ����Ĳ���
                $('.s2-box').addClass('s2-box-finish');
                $('.s2').css('overflow','visible');//����������⣬�ǵø�s2����css����Ȼ���ǻ�����
                setTimeout(function(){
                    $('.s2-box').removeClass('s2-box-finish').addClass('s2-box-start');
                    $('.s2').css('overflow','hidden');
                },1000)
            }else if(index==3){//�뿪�������Ĳ���
                $('.s3-box').addClass('s3-box-start');
            }else if(index==4){//�뿪�������Ĳ���
                $('.s4-box').addClass('s4-box-start');
            }
        }
    });
})
