import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, softShadows } from '@react-three/drei'
softShadows()

export default function Model({ ...props }) {

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Myroom.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['chair backAction'].play()
    actions['chair sitAction'].play()
  }, [actions])
  return (
    <group ref={group} {...props} dispose={null} position={[10, -10, 10]}>
      <group>
        <mesh geometry={nodes.sofa_stand.geometry} material={nodes.sofa_stand.material} position={[8.79, 10.48, -15.85]} castShadow />
        <mesh geometry={nodes.sofa_stand_1.geometry} material={nodes.sofa_stand_1.material} position={[-5.61, 10.48, -15.85]} castShadow />
        <mesh geometry={nodes.moniton_stand_support_1.geometry} material={nodes.moniton_stand_support_1.material} position={[-33.72, 12.41, -21.5]} scale={[0.6, 0.83, 0.6]} castShadow />
        <mesh geometry={nodes.moniton_stand_support.geometry} material={nodes.moniton_stand_support.material} position={[-30.48, 12.42, -21.56]} scale={[0.59, 0.82, 0.59]} castShadow />
        <mesh geometry={nodes.moniton_stand_support_3.geometry} material={nodes.moniton_stand_support_3.material} position={[-33.72, 12.41, -5.66]} scale={[0.6, 0.83, 0.6]} castShadow />
        <mesh geometry={nodes.moniton_stand_support_2.geometry} material={nodes.moniton_stand_support_2.material} position={[-30.48, 12.41, -5.66]} scale={[0.6, 0.83, 0.6]} castShadow />
        <mesh geometry={nodes.monitor_main_support.geometry} material={materials['monitor support stand']} position={[-32.2, 14.76, -13.9]} scale={0.83} castShadow />
        <mesh geometry={nodes.monitor_bottom.geometry} material={nodes.monitor_bottom.material} position={[-32.18, 14.87, -13.91]} scale={0.25} castShadow />
        <mesh geometry={nodes.sitting_main_support.geometry} material={nodes.sitting_main_support.material} position={[-23.11, 3.61, -12.17]} scale={0.58} castShadow />
        <mesh geometry={nodes.sitting_main_support001.geometry} material={nodes.sitting_main_support001.material} position={[-23.35, 3.25, -12.17]} rotation={[-0.1, -0.52, 2.1]} scale={0.44} castShadow />
        <mesh geometry={nodes.sitting_main_support002.geometry} material={nodes.sitting_main_support002.material} position={[-22.99, 3.25, -12.24]} rotation={[-3.03, -0.7, -0.92]} scale={0.44} castShadow />
        <mesh geometry={nodes.sitting_main_support003.geometry} material={nodes.sitting_main_support003.material} position={[-22.99, 3.25, -12.19]} rotation={[-3.02, 0.78, -1.08]} scale={0.44} castShadow />
        <mesh geometry={nodes.sitting_main_support004.geometry} material={nodes.sitting_main_support004.material} position={[-23.35, 3.25, -12.22]} rotation={[-0.09, 0.43, 2.18]} scale={0.44} castShadow />
        <mesh geometry={nodes.window.geometry} material={materials.window} position={[-33.86, 25.77, -5.32]} scale={[1, 6.66, 1]} castShadow />
        <mesh geometry={nodes.sofa001.geometry} material={nodes.sofa001.material} position={[1.86, 8.13, -21.95]} scale={[-3.62, 0.71, -2.36]} castShadow />
        <mesh geometry={nodes.sofa_back001.geometry} material={nodes.sofa_back001.material} position={[1.86, 6.25, -26.9]} rotation={[-1.59, 0, -0.03]} scale={[-4.13, 0.84, -2.8]} castShadow />
        <mesh geometry={nodes.wall_1.geometry} material={materials['wall 1']} position={[-21.54, -9.22, 1.93]} scale={1.03} receiveShadow />
        <mesh geometry={nodes.wall.geometry} material={materials.wall} position={[-35.9, 1.04, -27.29]} rotation={[0, Math.PI / 2, 0]} scale={1.03} castShadow receiveShadow />
        <mesh geometry={nodes.floor.geometry} material={materials.floor} position={[-23.37, 1.04, -29.55]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.03} receiveShadow />
        <mesh geometry={nodes.bed.geometry} material={nodes.bed.material} position={[-12.43, 19.92, -13.62]} scale={[1, 1, 1.46]} castShadow />
        <mesh geometry={nodes.tv_stand.geometry} material={materials['tv stand']} position={[25.73, 13.28, -13.62]} scale={[1, 1, 1.46]} castShadow />
        <mesh geometry={nodes.tv_support.geometry} material={nodes.tv_support.material} position={[7.59, 21.63, -13.37]} scale={[0.23, 1, 1.46]} castShadow />
        <mesh geometry={nodes.tv.geometry} material={nodes.tv.material} position={[29.67, 17.74, -13.85]} scale={[1, 1, 1.46]} castShadow />
        <mesh geometry={nodes.monitor_stand.geometry} material={nodes.monitor_stand.material} position={[-16.51, 20.89, -20.17]} scale={[0.83, 0.83, 1.22]} receiveShadow />
        <mesh geometry={nodes.monitor.geometry} material={nodes.monitor.material} position={[-14.29, 23.98, -17.88]} scale={[0.83, 0.83, 0.73]} castShadow />
        <mesh name="chair_back" geometry={nodes.chair_back.geometry} material={nodes.chair_back.material} position={[-23.08, 11.05, -12.31]} rotation={[0, -0.79, 0]} scale={[0.69, 3.57, -3.59]}  />
        <mesh name="chair_sit" geometry={nodes.chair_sit.geometry} material={nodes.chair_sit.material} position={[-22.82, 7.9, -12.23]} rotation={[0, -0.79, -Math.PI / 2]} scale={[0.83, 0.83, 0.73]} />
        <mesh geometry={nodes.dog_coach.geometry} material={materials['dog coach']} position={[-17.81, 3.2, -0.87]} scale={3.06} castShadow />
        <mesh geometry={nodes.pot001.geometry} material={nodes.pot001.material} position={[-30.09, 13.35, -26.85]} scale={[0.34, 0.61, 0.34]} castShadow />
        <mesh geometry={nodes.leaf006.geometry} material={nodes.leaf006.material} position={[-30.07, 16.19, -26.86]} scale={[0.11, 4.54, 0.23]} castShadow />
        <mesh geometry={nodes.leaf007.geometry} material={nodes.leaf007.material} position={[-30.07, 16.19, -26.86]} rotation={[Math.PI, -1.42, Math.PI]} scale={[0.11, 4.54, 0.23]} castShadow />
        <mesh geometry={nodes.leaf005.geometry} material={nodes.leaf005.material} position={[-30.07, 16.19, -26.86]} rotation={[Math.PI, -0.35, Math.PI]} scale={[0.11, 4.54, 0.23]} castShadow />
        <mesh geometry={nodes.leaf002.geometry} material={nodes.leaf002.material} position={[-30.07, 16.19, -26.86]} rotation={[0, 1.16, 0]} scale={[0.11, 4.54, 0.23]} castShadow />
        <mesh geometry={nodes.pot.geometry} material={nodes.pot.material} position={[-8.66, 7.7, 1.55]} scale={[0.22, 0.4, 0.22]} castShadow />
        <mesh geometry={nodes.leaf003.geometry} material={nodes.leaf003.material} position={[-8.64, 9.58, 1.54]} scale={[0.07, 2.99, 0.15]} castShadow />
        <mesh geometry={nodes.leaf001.geometry} material={nodes.leaf001.material} position={[-8.64, 9.58, 1.54]} rotation={[Math.PI, -1.42, Math.PI]} scale={[0.07, 2.99, 0.15]} castShadow />
        <mesh geometry={nodes.leaf004.geometry} material={nodes.leaf004.material} position={[-8.64, 9.58, 1.54]} rotation={[Math.PI, -0.35, Math.PI]} scale={[0.07, 2.99, 0.15]} castShadow />
        <mesh geometry={nodes.leaf.geometry} material={nodes.leaf.material} position={[-8.64, 9.58, 1.54]} rotation={[0, 1.16, 0]} scale={[0.07, 2.99, 0.15]} castShadow />
        <mesh geometry={nodes.bed_stand002.geometry} material={nodes.bed_stand002.material} position={[-12.43, 13.28, -43.24]} scale={[1, 1, 1.46]} castShadow />
        <mesh geometry={nodes.bed_stand003.geometry} material={nodes.bed_stand003.material} position={[-12.43, 13.28, -13.52]} scale={[1, 1, 1.46]} castShadow />
        <mesh geometry={nodes.monitor_stand001.geometry} material={materials.ḵeyboard} position={[-10.56, 20.11, -24.83]} scale={[0.87, 0.87, 1.26]} castShadow />
        <mesh geometry={nodes.monitor_stand002.geometry} material={nodes.monitor_stand002.material} position={[-26.89, 12.96, -11.18]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand003.geometry} material={nodes.monitor_stand003.material} position={[-26.89, 12.96, -11.82]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand004.geometry} material={nodes.monitor_stand004.material} position={[-26.89, 12.96, -12.46]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand005.geometry} material={nodes.monitor_stand005.material} position={[-26.89, 12.96, -13.09]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand006.geometry} material={nodes.monitor_stand006.material} position={[-26.89, 12.96, -13.73]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand007.geometry} material={nodes.monitor_stand007.material} position={[-26.89, 12.96, -14.37]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand008.geometry} material={nodes.monitor_stand008.material} position={[-26.89, 12.96, -15.01]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand009.geometry} material={nodes.monitor_stand009.material} position={[-26.89, 12.96, -15.65]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand010.geometry} material={nodes.monitor_stand010.material} position={[-26.89, 12.96, -16.29]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand011.geometry} material={nodes.monitor_stand011.material} position={[-26.89, 12.96, -16.93]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand012.geometry} material={nodes.monitor_stand012.material} position={[-26.89, 12.96, -17.56]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand013.geometry} material={nodes.monitor_stand013.material} position={[-26.89, 12.96, -18.2]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand014.geometry} material={nodes.monitor_stand014.material} position={[-26.89, 12.96, -18.84]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand015.geometry} material={nodes.monitor_stand015.material} position={[-26.38, 12.96, -11.18]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand016.geometry} material={nodes.monitor_stand016.material} position={[-26.38, 12.96, -11.82]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand017.geometry} material={nodes.monitor_stand017.material} position={[-26.38, 12.96, -12.46]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand018.geometry} material={nodes.monitor_stand018.material} position={[-26.38, 12.96, -13.09]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand019.geometry} material={nodes.monitor_stand019.material} position={[-26.38, 12.96, -13.73]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand020.geometry} material={nodes.monitor_stand020.material} position={[-26.38, 12.96, -14.37]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand021.geometry} material={nodes.monitor_stand021.material} position={[-26.38, 12.96, -15.01]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand022.geometry} material={nodes.monitor_stand022.material} position={[-26.38, 12.96, -15.65]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand023.geometry} material={nodes.monitor_stand023.material} position={[-26.38, 12.96, -16.29]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand024.geometry} material={nodes.monitor_stand024.material} position={[-26.38, 12.96, -16.93]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand025.geometry} material={nodes.monitor_stand025.material} position={[-26.38, 12.96, -17.56]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand026.geometry} material={nodes.monitor_stand026.material} position={[-26.38, 12.96, -18.2]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand027.geometry} material={nodes.monitor_stand027.material} position={[-26.38, 12.96, -18.84]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand028.geometry} material={nodes.monitor_stand028.material} position={[-26.38, 12.96, -19.48]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand029.geometry} material={nodes.monitor_stand029.material} position={[-26.89, 12.96, -19.48]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand030.geometry} material={nodes.monitor_stand030.material} position={[-26.89, 12.96, -20.12]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand031.geometry} material={nodes.monitor_stand031.material} position={[-25.83, 12.96, -11.18]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand032.geometry} material={nodes.monitor_stand032.material} position={[-25.84, 12.96, -12.46]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand033.geometry} material={nodes.monitor_stand033.material} position={[-25.84, 12.96, -13.09]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand034.geometry} material={nodes.monitor_stand034.material} position={[-25.84, 12.96, -13.73]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand035.geometry} material={nodes.monitor_stand035.material} position={[-25.84, 12.96, -14.37]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand036.geometry} material={nodes.monitor_stand036.material} position={[-25.84, 12.96, -15.01]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand037.geometry} material={nodes.monitor_stand037.material} position={[-25.84, 12.96, -15.65]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand038.geometry} material={nodes.monitor_stand038.material} position={[-25.84, 12.96, -16.29]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand039.geometry} material={nodes.monitor_stand039.material} position={[-25.84, 12.96, -16.93]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand040.geometry} material={nodes.monitor_stand040.material} position={[-25.84, 12.96, -17.56]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand041.geometry} material={nodes.monitor_stand041.material} position={[-25.84, 12.96, -18.2]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand042.geometry} material={nodes.monitor_stand042.material} position={[-25.84, 12.96, -18.84]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand043.geometry} material={nodes.monitor_stand043.material} position={[-25.84, 12.96, -19.48]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand044.geometry} material={nodes.monitor_stand044.material} position={[-25.84, 12.96, -20.12]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand045.geometry} material={nodes.monitor_stand045.material} position={[-25.26, 12.96, -11.18]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand046.geometry} material={nodes.monitor_stand046.material} position={[-24.71, 12.96, -11.18]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand047.geometry} material={nodes.monitor_stand047.material} position={[-24.71, 12.96, -18.96]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand048.geometry} material={nodes.monitor_stand048.material} position={[-24.15, 12.96, -11.18]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand049.geometry} material={nodes.monitor_stand049.material} position={[-24.15, 12.96, -11.82]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand050.geometry} material={nodes.monitor_stand050.material} position={[-24.15, 12.96, -12.46]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand051.geometry} material={nodes.monitor_stand051.material} position={[-24.15, 12.96, -13.09]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand052.geometry} material={nodes.monitor_stand052.material} position={[-24.15, 12.96, -13.75]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand053.geometry} material={nodes.monitor_stand053.material} position={[-24.15, 12.96, -16.96]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand054.geometry} material={nodes.monitor_stand054.material} position={[-24.15, 12.96, -17.64]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand055.geometry} material={nodes.monitor_stand055.material} position={[-25.26, 12.96, -19.3]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand056.geometry} material={nodes.monitor_stand056.material} position={[-25.27, 12.96, -12.8]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand057.geometry} material={nodes.monitor_stand057.material} position={[-25.27, 12.96, -13.43]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand058.geometry} material={nodes.monitor_stand058.material} position={[-25.27, 12.96, -14.07]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand059.geometry} material={nodes.monitor_stand059.material} position={[-25.27, 12.96, -14.71]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand060.geometry} material={nodes.monitor_stand060.material} position={[-25.27, 12.96, -15.35]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand061.geometry} material={nodes.monitor_stand061.material} position={[-25.27, 12.96, -15.99]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand062.geometry} material={nodes.monitor_stand062.material} position={[-25.27, 12.96, -16.63]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand063.geometry} material={nodes.monitor_stand063.material} position={[-25.27, 12.96, -17.27]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand064.geometry} material={nodes.monitor_stand064.material} position={[-25.27, 12.96, -17.9]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand065.geometry} material={nodes.monitor_stand065.material} position={[-25.27, 12.96, -18.54]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand066.geometry} material={nodes.monitor_stand066.material} position={[-24.72, 12.96, -13.1]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand067.geometry} material={nodes.monitor_stand067.material} position={[-24.72, 12.96, -13.74]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand068.geometry} material={nodes.monitor_stand068.material} position={[-24.72, 12.96, -14.38]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand069.geometry} material={nodes.monitor_stand069.material} position={[-24.72, 12.96, -15.02]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand070.geometry} material={nodes.monitor_stand070.material} position={[-24.72, 12.96, -15.66]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand071.geometry} material={nodes.monitor_stand071.material} position={[-24.72, 12.96, -16.29]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand072.geometry} material={nodes.monitor_stand072.material} position={[-24.72, 12.96, -16.93]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand073.geometry} material={nodes.monitor_stand073.material} position={[-24.72, 12.96, -17.57]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand074.geometry} material={nodes.monitor_stand074.material} position={[-24.72, 12.96, -18.21]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand075.geometry} material={nodes.monitor_stand075.material} position={[-23.87, 12.96, -20.12]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand076.geometry} material={nodes.monitor_stand076.material} position={[-23.87, 12.96, -19.48]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand077.geometry} material={nodes.monitor_stand077.material} position={[-23.87, 12.96, -18.84]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand078.geometry} material={nodes.monitor_stand078.material} position={[-24.14, 12.96, -19.48]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.monitor_stand079.geometry} material={nodes.monitor_stand079.material} position={[-24.15, 12.96, -18.25]} scale={[0.1, 0.1, 0.15]} />
        <mesh geometry={nodes.window001.geometry} material={nodes.window001.material} position={[-31.36, 31.56, -4.27]} scale={[0.26, 0.4, 0.58]} castShadow />
        <mesh geometry={nodes.window002.geometry} material={nodes.window002.material} position={[-31.36, 26.39, -4.27]} scale={[0.26, 0.4, 0.58]} castShadow />
        <mesh geometry={nodes.pot002.geometry} material={nodes.pot002.material} position={[-30.09, 12.67, 0.79]} scale={[0.21, 0.37, 0.21]} castShadow />
        <mesh geometry={nodes.leaf008.geometry} material={nodes.leaf008.material} position={[-30.07, 14.39, 0.79]} scale={[0.07, 2.73, 0.14]} castShadow />
        <mesh geometry={nodes.leaf009.geometry} material={nodes.leaf009.material} position={[-30.07, 14.39, 0.79]} rotation={[Math.PI, -1.42, Math.PI]} scale={[0.07, 2.73, 0.14]} castShadow />
        <mesh geometry={nodes.leaf010.geometry} material={nodes.leaf010.material} position={[-30.07, 14.39, 0.79]} rotation={[Math.PI, -0.35, Math.PI]} scale={[0.07, 2.73, 0.14]} castShadow />
        <mesh geometry={nodes.leaf011.geometry} material={nodes.leaf011.material} position={[-30.07, 14.39, 0.79]} rotation={[0, 1.16, 0]} scale={[0.07, 2.73, 0.14]} castShadow />
      </group>
    </group>
  )
}

useGLTF.preload('/Myroom.glb')
