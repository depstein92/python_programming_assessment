
class MathSolutions():
    
    @staticmethod
    def area_of_triangle(base, height):                
        
        return (1/2 * base * height)
    
    @staticmethod
    def maximum_edge(base, height):
        return base + height
    
    
    @staticmethod
    def hours_and_minutes_to_seconds(hours, minutes):
        try:
            int(hours)
        except ValueError:
            print('Base is not a number')
        
        try:
            int(minutes)
        except ValueError:
            print('Height is not a number')
        
        hours_into_seconds = (hours * 60) * 60
        minutes_into_seconds = minutes * 60
        return (hours_into_seconds + minutes_into_seconds)  
    
    @classmethod
    def repeat_str(cls, string, repetition):
        
        if repetition >= 2:
            return string + cls.repeat_str(string, repetition - 1)
        
        return string       
                            
            
        
    