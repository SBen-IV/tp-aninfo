class Statement:
    name = None

    @classmethod
    def for_line(self, line, outfile):
        for subclass in self.__subclasses__():
            if subclass.is_for(line):
                return subclass(line, outfile)
        return None

    @classmethod
    def is_for(self, line):
        return line.startswith(self.name) 

    def get_pattern(self, line):
        return line.strip().split(self.name)[1][1:]

    def _write_statement_block(self, patterns):
        if not (self.pattern in patterns):
            patterns.append(self.pattern)
            self.outfile.write(f'{self.name}("{self.pattern}", function() {"{"}\n')
            self.write_end_of_block()

    def write_end_of_block(self):
        self.outfile.write(f'\t// Write code here that turns the phrase above into concrete actions\n')
        self.outfile.write(f'\treturn "pending";\n')
        self.outfile.write(f'{"}"});\n\n')


class Given(Statement):
    name = "Given"

    def __init__(self, line, outfile):
        self.outfile = outfile
        self.line = line
        self.pattern = self.get_pattern(line)

    def write_statement_block(self, line, antecessors, given_patterns, when_patterns, then_patterns):
        antecessors.append(self.name)
        self._write_statement_block(given_patterns)


class And(Statement):
    name = "And"

    def __init__(self, line, outfile):
        self.outfile = outfile
        self.line = line
        self.pattern = self.get_pattern(line)

    def write_statement_block(self, line, antecessors, given_patterns, when_patterns, then_patterns):
        if not (self.pattern in given_patterns) and not (self.pattern in then_patterns):
            given_patterns.append(self.pattern)
            self.outfile.write(f'{antecessors[-1]}("{self.pattern}", function() {"{"}\n')
            self.write_end_of_block()


class When(Statement):
    name = "When"

    def __init__(self, line, outfile):
        self.outfile = outfile
        self.line = line
        self.pattern = self.get_pattern(line)

    def write_statement_block(self, line, antecessors, given_patterns, when_patterns, then_patterns):
        self._write_statement_block(when_patterns)


class Then(Statement):
    name = "Then"

    def __init__(self, line, outfile):
        self.outfile = outfile
        self.line = line
        self.pattern = self.get_pattern(line)

    def write_statement_block(self, line, antecessors, given_patterns, when_patterns, then_patterns):
        antecessors.append(self.name)
        self._write_statement_block(then_patterns)


def main():
    feature = "project_creation"
    with open(f"./tests/features/{feature}.feature", "r") as file, open(f"{feature}.steps.ts", "w") as outfile:
        outfile.write('import { Given, When, Then, TableDefinition } from "cucumber";\n\n\n')
        antecessors = []
        given_patterns = []
        when_patterns = []
        then_patterns = []

        for line in file.readlines():
            line = line.strip()
            statement = Statement.for_line(line, outfile)
            if statement:
                statement.write_statement_block(line, antecessors, given_patterns, when_patterns, then_patterns)


if __name__ == '__main__':
    main()
