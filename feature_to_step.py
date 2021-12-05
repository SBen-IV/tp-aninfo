from __future__ import annotations
from io import TextIOWrapper
from typing import Dict, List


class Statement:
    name = None

    @classmethod
    def for_line(self, line: str, outfile: TextIOWrapper) -> Statement:
        for subclass in self.__subclasses__():
            if subclass.is_for(line):
                return subclass(line, outfile)

    @classmethod
    def is_for(self, line: str) -> bool:
        return line.strip().startswith(self.name) 

    def get_pattern(self, line: str) -> str:
        return line.strip().split(self.name)[1][1:]

    def _write_statement_block(self, patterns: list) -> None:
        if not (self.pattern in patterns):
            patterns.append(self.pattern)
            self.outfile.write(f'{self.name}("{self.pattern}", function() {"{"}\n')
            self.write_end_of_block()

    def write_end_of_block(self) -> None:
        self.outfile.write(f'\t// Write code here that turns the phrase above into concrete actions\n')
        self.outfile.write(f'\treturn "pending";\n')
        self.outfile.write(f'{"}"});\n\n')


class Given(Statement):
    name = "Given"

    def __init__(self, line: str, outfile: TextIOWrapper) -> None:
        self.outfile = outfile
        self.line = line
        self.pattern = self.get_pattern(line)

    def write_statement_block(self, antecessors: List[str], previous_patterns: Dict[str, List[str]]) -> None:
        antecessors.append(self.name)
        self._write_statement_block(previous_patterns[self.name])


class And(Statement):
    name = "And"

    def __init__(self, line: str, outfile: TextIOWrapper) -> None:
        self.outfile = outfile
        self.line = line
        self.pattern = self.get_pattern(line)

    def write_statement_block(self, antecessors: List[str], previous_patterns: Dict[str, List[str]]):
        given_patterns, then_patterns = previous_patterns["Given"], previous_patterns["Then"]
        if not (self.pattern in given_patterns): 
            given_patterns.append(self.pattern)
        elif not (self.pattern in then_patterns):
            then_patterns.append(self.pattern)
        self.outfile.write(f'{antecessors[-1]}("{self.pattern}", function() {"{"}\n')
        self.write_end_of_block()


class When(Statement):
    name = "When"

    def __init__(self, line: str, outfile: TextIOWrapper):
        self.outfile = outfile
        self.line = line
        self.pattern = self.get_pattern(line)

    def write_statement_block(self, antecessors: List[str], previous_patterns: Dict[str, List[str]]):
        self._write_statement_block(previous_patterns[self.name])


class Then(Statement):
    name = "Then"

    def __init__(self, line: str, outfile: TextIOWrapper):
        self.outfile = outfile
        self.line = line
        self.pattern = self.get_pattern(line)

    def write_statement_block(self, antecessors: List[str], previous_patterns: Dict[str, List[str]]):
        antecessors.append(self.name)
        self._write_statement_block(previous_patterns[self.name])


class NotAStatement(Statement):
    name = ""

    def __init__(self, line: str, outfile: TextIOWrapper):
        self.outfile = outfile
        self.line = line

    def write_statement_block(self, antecessors: List[str], previous_patterns: Dict[str, List[str]]):
        pass

def main():
    feature = "project_creation"
    with open(f"./tests/features/{feature}.feature", "r") as file, open(f"{feature}.steps.ts", "w") as outfile:
        outfile.write('import { Given, When, Then, TableDefinition } from "cucumber";\n\n\n')
        antecessors = []
        previous_patterns = {
            "Given": [],
            "When": [],
            "Then": [],
        }

        for line in file.readlines():
            Statement.for_line(line, outfile).write_statement_block(antecessors, previous_patterns)


if __name__ == '__main__':
    main()
