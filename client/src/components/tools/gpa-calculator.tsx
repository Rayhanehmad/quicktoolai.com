import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Plus, Trash2 } from "lucide-react";

interface Course {
  grade: string;
  credits: string;
}

const gradePoints: { [key: string]: number } = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'F': 0.0
};

export function GPACalculator() {
  const [courses, setCourses] = useState<Course[]>([{ grade: 'A', credits: '3' }]);
  const [gpa, setGpa] = useState<number | null>(null);

  const addCourse = () => {
    setCourses([...courses, { grade: 'A', credits: '3' }]);
  };

  const removeCourse = (index: number) => {
    if (courses.length > 1) {
      setCourses(courses.filter((_, i) => i !== index));
    }
  };

  const updateCourse = (index: number, field: 'grade' | 'credits', value: string) => {
    const updated = [...courses];
    updated[index][field] = value;
    setCourses(updated);
  };

  const calculate = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
      const credits = parseFloat(course.credits);
      if (!isNaN(credits)) {
        totalPoints += gradePoints[course.grade] * credits;
        totalCredits += credits;
      }
    });

    if (totalCredits > 0) {
      setGpa(totalPoints / totalCredits);
    }
  };

  return (
    <div id="gpa" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">GPA Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate your Grade Point Average</p>
      </div>
      
      <div className="mb-4 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
        <div className="space-y-3">
          {courses.map((course, index) => (
            <div key={index} className="flex gap-2 items-center">
              <Select 
                value={course.grade} 
                onValueChange={(v) => updateCourse(index, 'grade', v)}
              >
                <SelectTrigger className="flex-1 bg-background h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(gradePoints).map(grade => (
                    <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                type="number"
                value={course.credits}
                onChange={(e) => updateCourse(index, 'credits', e.target.value)}
                placeholder="Credits"
                className="w-24 h-10 text-center"
              />
              {courses.length > 1 && (
                <Button
                  onClick={() => removeCourse(index)}
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
        <Button
          onClick={addCourse}
          variant="outline"
          size="sm"
          className="w-full mt-3"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Course
        </Button>
      </div>

      <Button
        onClick={calculate}
        className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12"
        data-testid="button-calculate"
      >
        <GraduationCap className="w-4 h-4 mr-2" />
        Calculate GPA
      </Button>

      {gpa !== null && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary animate-slide-up" data-testid="result">
          <div className="text-3xl font-bold text-primary text-center">
            {gpa.toFixed(2)}
          </div>
          <div className="text-xs text-center text-muted-foreground mt-1">
            Grade Point Average
          </div>
        </div>
      )}
    </div>
  );
}
