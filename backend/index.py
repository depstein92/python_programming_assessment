from flask import Flask, request, abort, jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

from math_solutions import MathSolutions

solutions = MathSolutions()

    
@app.route('/api/area_of_triangle', methods=['POST'])
def area_of_triangle():
      '''
      base: str 
      height: str
      '''
      
      data = request.get_json(force=True)      
      base, height = data['base'], data['height']
  
      if isinstance(base, int) is not True:
          return jsonify(
              errorMessage='Base is not of type integer'
          ), 500
          
      if isinstance(height, int) is not True:
          return jsonify(
              errorMessage='Height is not of type integer'
          ), 500
                     
      return {
        'solution': MathSolutions.area_of_triangle(
            int(base), int(height)
        )  
      }
   
@app.route('/api/maximum_edge', methods=['POST'])
def maximum_edge():
    '''
    base: str 
    height: str
    '''
      
    data = request.get_json(force=True)      
    base, height = data['base'], data['height']
      
    if isinstance(height, int) is not True:
          return jsonify(
              errorMessage='Height is not of type integer'
          ), 500
        
    if isinstance(base, int) is not True:
          return jsonify(
              errorMessage='Base is not of type integer'
          ), 500
    
    return {
        'solution': MathSolutions.maximum_edge(
            int(base), int(height)
        ) 
    }, 200

@app.route('/api/convert_hours_and_minutes_to_seconds', methods=['POST'])
def convert_hours_and_minutes_to_seconds():
    '''
    hours: str 
    minutes: str
    '''
    data = request.get_json(force=True)    
    hours, minutes = data['hours'], data['minutes']
          
    if isinstance(hours, int) is not True:
          return jsonify(
              errorMessage='Hours is not of type integer'
          ), 500
        
    
    if isinstance(minutes, int) is not True:
          return jsonify(
              errorMessage='Minutes is not of type integer'
          ), 500
    
    return {
        'solution': MathSolutions.hours_and_minutes_to_seconds(
            int(hours), int(minutes) 
        ) 
    }, 200
    

@app.route('/api/string_repeat', methods=['POST'])
def string_repeat():
    
    data = request.get_json(force=True)    
    string_to_repeat, repetition = data['str_to_repeat'], data['repetition']
     
    if isinstance(string_to_repeat, str) is not True:
          return jsonify(
              errorMessage='String to Repeat is not of type string'
          ), 500
    
    if isinstance(repetition, int) is not True:
          return jsonify(
              errorMessage='Repetition is not of type integer'
          ), 500    
     
    return {
        'solution': solutions.repeat_str(
            str(string_to_repeat), int(repetition)
            ) 
    }, 200

if __name__ == '__main__':
    app.run(debug=True)