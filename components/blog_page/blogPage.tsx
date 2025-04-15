import { FaArrowLeft, FaCalendarAlt, FaComment, FaUser } from "react-icons/fa";

export default function BlogPage({title , desc , data}) {
  return (
    <div className='flex mx-auto max-w-[82rem] mt-[100px]'>
                    <div className='w-[70%]'>
                        <div className='flex'>
                            <div className='flex gap-x-2 justify-center items-center mx-2'><span><FaUser size='20px' style={{ color: 'var(--primaryColor)' }}/></span><span className='text-xl' style={{color : 'var(--textColor)'}}>foodking</span></div>
                            <div className='flex gap-x-2 justify-center items-center mx-2'><span><FaComment size='20px' style={{ color: 'var(--primaryColor)' }}/></span><span className='text-xl'style={{color : 'var(--textColor)'}}>1 نظرات</span></div>
                            <div className='flex gap-x-2 justify-center items-center mx-2'><span><FaCalendarAlt size='20px' style={{ color: 'var(--primaryColor)' }}/></span><span className='text-xl'style={{color : 'var(--textColor)'}}>۰۹ مرد ۱۴۰۳</span></div>
                        </div>
                        <div className='my-[40px]'>
                            <h1 className='text-5xl font-bold'>{title}</h1>
                            <h4 className='text-[18px] my-[40px] font-bold' style={{color : 'var(--textColor)'}}>{desc}</h4>
                            <a href="#" className='flex items-center font-bold hover:[color:var(--primaryColor)] transition-all'><span className='me-1 text-xl'>مشاهده بیشتر </span><span><FaArrowLeft size='20px'/></span></a>
                            <div className='bg-[url(/pages/blog/b_image/b_01.jpg)]  bg-cover w-full h-[700px] my-[40px] rounded-3xl' ></div>
                        </div>
                    </div> 
        </div>
  );
}