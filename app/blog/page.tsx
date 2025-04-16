import styles from './blog.module.css'
import BlogPage from '@/components/blog_page/blogPage'
export default function Blog(){
    const dataBlog=[
        {
            id: 1,
            title: 'سلام دنیا!',
            desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
        },
        {
            id: 2,
            title: 'سلام دنیا!',
            desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
        },
        // {
        //     id: 3,
        //     title: 'سلام دنیا!',
        //     desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
        // },
        // {
        //     id: 4,
        //     title: 'سلام دنیا!',
        //     desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
        // },
        // {
        //     id: 5,
        //     title: 'سلام دنیا!',
        //     desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
        // },
        // {
        //     id: 6,
        //     title: 'سلام دنیا!',
        //     desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
        // },
        // {
        //     id: 7,
        //     title: 'سلام دنیا!',
        //     desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
        // },
        // {
        //     id: 8,
        //     title: 'سلام دنیا!',
        //     desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
        // },
        // {
        //     id: 9,
        //     title: 'سلام دنیا!',
        //     desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
        // },
        // {
        //     id: 10,
        //     title: 'سلام دنیا!',
        //     desc: 'به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!',
        // },

    ]
    return(
        ///bug

        // dir : rtl
        // back_color
        //tran_button
        //import_image
        <div className='' style={{backgroundColor : 'var(--backgroundColor)'}}> 
            <div className={styles.img_background}>
                <div className='flex justify-center items-center h-full'>
                    <h2 className='text-white text-7xl font-bold'>صفحه وبلاگ</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 mx-auto max-w-[82rem]  mt-[100px] '>
            <div className='lg:col-span-8 px-3 space-y-4'>
                {dataBlog.map((item) => (
                    <BlogPage key={item.id} {...item} />
                ))}
            </div>
                <div className='lg:col-span-4 ps-5'>
                    <div className='flex mb-[100px] justify-end'>
                        <input type="text" className='border border-gray-300 p-3 px-5 w-full focus:outline-none focus:border-gray-300 ' style={{borderStartStartRadius : 'var(--wc-form-border-radius)'}}/>
                        <button className='px-5 py-3' style={{backgroundColor : 'var(--wc-orange)'}}>جستجو</button>
                    </div>
                    <div className='bg-red-300'>
                        <h3 className='text-2xl font-bold'>نوشته‌های تازه</h3>
                        <ul>
                            <li>سلام دنیا!</li>
                            <li>شگفتی های غذا در رستوران فودکینگ</li>
                            <li>آشپزی چارنیکلز در حال کاوش در شگفتی های غذا در رستوران</li>
                            <li>نیش پررنگ: طعم های عجیب و غریب، ماجراجویی جهانی</li>
                            <li>هوس های سریع: از بین بردن لذت های فست فود</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}