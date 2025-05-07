export interface Exercise {
  id: string;
  name: string;
}

export const exercises: Exercise[] = [
  { id: 'bench-press', name: '臥推' },
  { id: 'squat', name: '深蹲' },
  { id: 'deadlift', name: '硬舉' },
  { id: 'shoulder-press', name: '肩推' },
  { id: 'pull-ups', name: '引體向上' },
  { id: 'barbell-row', name: '槓鈴划船' },
  { id: 'leg-press', name: '腿推' },
  { id: 'lat-pulldown', name: '下拉' }
]; 