import { Physics } from '@react-three/rapier'
import useGame from './stores/useGame.jsx'
import Lights from './Lights.jsx'
import { Level } from './Level.jsx'
import Player from './Player.jsx'
import { Html } from '@react-three/drei'

export default function Experience() {
    const blocksCount = useGame((state) => state.blocksCount)
    const setBlocksCount = useGame((state) => state.setBlocksCount)
    const blocksSeed = useGame(state => state.blocksSeed)
    const setDifficulty = useGame((state) => state.setDifficulty)
    const gameDifficulty = useGame((state)=> state.difficulty);
    
    
        if(gameDifficulty === 'EASY') {
            setBlocksCount(3);
        } else if(gameDifficulty === 'MEDIUM') {
            setBlocksCount(6);
        } else {
            setBlocksCount(12);
        }

    const onDifficultyChange = (difficulty) => {
        setDifficulty(difficulty)
    }

    return <>

        <color args={['#bdedfc']} attach="background" />

        <Physics debug={false}>
            <Lights />
            <Level count={blocksCount} seed={blocksSeed} />
            <Player />

            {/* Buttons */}
            <group position={[-0.08, 0.85, 0]}>
                <Html position={[-1, 0.5, 0]}>
                    <button
                        style={{ padding: '10px 20px', background: 'green', color: 'white', border: '1px solid white' }}
                        onClick={() => onDifficultyChange('EASY')}
                    >
                        EASY
                    </button>
                </Html>
                <Html position={[0, 0.5, 0]}>
                    <button
                        style={{ padding: '10px 20px', background: 'yellow', color: 'black', border: '1px solid white'  }}
                        onClick={() => onDifficultyChange('MEDIUM')}
                    >
                        MEDIUM
                    </button>
                </Html>
                <Html position={[1, 0.5, 0]}>
                    <button
                        style={{ padding: '10px 20px', background: 'red', color: 'white', border: '1px solid white'  }}
                        onClick={() => onDifficultyChange('HARD')}
                    >
                        HARD
                    </button>
                </Html>
            </group>
        </Physics>

    </>
}