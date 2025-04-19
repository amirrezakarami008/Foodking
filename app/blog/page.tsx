import styles from './blog.module.css'
import BlogComponents from '@/components/blog_components/blog_components'
export default function Blog(){
    const dataBlog=[
        {
            id: 1,
            title: 'سلام دنیا!',
            desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
            image:'/pages/blog/b_image/b_01.jpg'
        },
        {
            id: 2,
            title: 'آشپزی چارنیکلز در حال کاوش در شگفتی های غذا در رستوران فودکینگ',
            desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
            image:'/pages/blog/b_image/b_02.jpg'
        },
        {
            id: 3,
            title: 'سلام دنیا!',
            desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
            image:'/pages/blog/b_image/b_03.jpg'

        },
        {
            id: 4,
            title: 'سلام دنیا!',
            desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
            image:'/pages/blog/b_image/b_01.jpg'

        },
        {
            id: 5,
            title: 'سلام دنیا!',
            desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
            image:'/pages/blog/b_image/b_03.jpg'

        },
        {
            id: 6,
            title: 'سلام دنیا!',
            desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
            image:'/pages/blog/b_image/b_02.jpg'

        }
    ]
    return(
       
        <div dir='rtl' className='' style={{backgroundColor : 'var(--backgroundColor)'}}> 
            <div className="bg-[url('/pages/blog/blog_01.jpg')] bg-cover bg-center h-[200px]">
                <div className='flex justify-center items-center h-full'>
                    <h2 className='text-white text-7xl font-bold'>صفحه وبلاگ</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 mx-auto max-w-[82rem] px-2 lg-px-0   mt-[100px] '>
            <div className='lg:col-span-8  space-y-4'>
                {dataBlog.map((item) => (
                    <BlogComponents key={item.id} {...item} />
                ))}
            </div>
                <div className='lg:col-span-4 px-3'>
                    <div className='flex mb-[100px] justify-end border py-[35px] px-3 border-gray-200'>
                        <input type="text" className='border border-gray-300 p-4 px-5 w-full focus:outline-none focus:border-gray-300 ' style={{borderStartStartRadius : 'var(--wc-form-border-radius)'}}/>
                        <button className='px-5 py-3' style={{backgroundColor : 'var(--wc-orange)'}}>جستجو</button>
                    </div>
                    <div className='border py-[35px] px-3 border-gray-200 mb-[50px]'>
                        <h3 className='text-2xl font-bold my-5'>نوشته‌های تازه</h3>
                        <ul>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">سلام دنیا!</a></li> 
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">شگفتی های غذا در رستوران فودکینگ</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">آشپزی چارنیکلز در حال کاوش در شگفتی های غذا در رستوران</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">نیش پررنگ: طعم های عجیب و غریب، ماجراجویی جهانی</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">هوس های سریع: از بین بردن لذت های فست فود</a></li>
                        </ul>
                    </div>
                    <div className='border py-[35px] px-3 border-gray-200 my-[50px]'>
                        <h3 className='text-2xl font-bold my-5'>نوشته‌های تازه</h3>
                        <ul>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">آخرین دیدگاه‌ها</a></li> 
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">foodking <span className='text-[var(--wc-orange)]'>در</span> هوس های سریع: از بین بردن لذت های فست فود</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">یک نویسنده دیدگاه وردپرس <span className='text-[var(--wc-orange)]'>در</span>  سلام دنیا!</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">foodking <span className='text-[var(--wc-orange)]'>در</span>  هوپر برگر کینگ</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">foodking <span className='text-[var(--wc-orange)]'>در</span>  روتی با مرغ</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">foodking <span className='text-[var(--wc-orange)]'>در</span>  مرغ کبابی</a></li>
                        </ul>
                    </div>
                    <div className='border py-[35px] px-3 border-gray-200 my-[50px]'>
                        <h3 className='text-2xl font-bold my-5'>بایگانی‌ها</h3>
                        <span className='text-[17px]'>جولای 2024</span>
                    </div>
                    <div className='border py-[35px] px-3 border-gray-200 my-[50px]'>
                        <h3 className='text-2xl font-bold my-5'>دسته‌ها</h3>
                        <ul>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">برنج کبابی</a></li> 
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">پاستا</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">پیتزا داغ</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">دسته‌بندی نشده</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">ساندویچ</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">سلامت و بهداشت</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">فرانسوی سرخ شده</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">فست فود</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">مرغ سوخاری</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">نان</a></li>
                            <li className='my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all'><a href="">هات داگ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}