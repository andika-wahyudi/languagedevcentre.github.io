export function clamp(v,min,max){ return v<min?min:v>max?max:v; }
export function rectsOverlap(a,b){
  return !(a.x+a.w <= b.x || a.x >= b.x+b.w || a.y+a.h <= b.y || a.y >= b.y+b.h);
}
export class EventEmitter { constructor(){ this.listeners={}; } on(ev,fn){ (this.listeners[ev] ||= []).push(fn); } emit(ev,data){ (this.listeners[ev]||[]).forEach(fn=>fn(data)); } }