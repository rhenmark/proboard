import { Button } from '@proboard/ui';
import Link from 'next/link';

const Project = () => (
    <div className="w-screen h-screen p-4">
        {/* <header className='h-[80px] flex items-center'>
            <Link href="/">
                <Button className="p-2 px-4 rounded-sm">Back</Button>
            </Link>
        </header> */}
        <section className='grid grid-cols-[100px_1fr] gap-8 h-full'>
            <div className='w-max-md rounded-md h-full'>
                <nav className='bg-black h-full rounded-lg'>
                </nav>
            </div>
            <div className="grid grid-flow-rows">
                <div className='h-20 bg-slate-300 rounded-md'></div>
                <div className='grid grid-cols-[60%_40%]'>
                    <div>left</div>
                    <div>right</div>
                </div>
            </div>
        </section>
    </div>
)

export default Project