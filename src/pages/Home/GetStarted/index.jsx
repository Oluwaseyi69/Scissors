import { FilledButton } from '../../../components/Button/FilledButton'
import style from './index.module.css'

export function GetStarted() {
    return(
        <div className={style.back2}>
            <div className={style.secondDiv}>
                <p>Revolutionizing Link Optimization</p>
                <FilledButton text="Get Started" color="white" backgroundColor="rgba(0, 101, 254, 1)" borderRadius={100}
                              border="1px solid rgba(0, 101,254, 1)" width={200} height={48}
                              fontSize={16} gap={10} />
            </div>

        </div>
    )
}