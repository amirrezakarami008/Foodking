import styles from './blog.module.css'
export default function Blog(){
    return(
        <>
            <div className={styles.img_background}>
                <div className='flex justify-center items-center h-full'>
                    <h2 className='text-white text-7xl font-bold'>صفحه وبلاگ</h2>
                </div>
            </div>
        </>
    )
}