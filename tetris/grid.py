import pygame

class Grid:
    def __init__(self):
        self.num_rows = 20
        self.num_cols = 10
        self.cell_size = 30
        self.grid = [[0 for j in range(self.num_cols)]for i in range(self.num_rows)]
        self.color = self.get_cell_colors()

    def print_grid(self):
        for row in range(self.num_rows):
            for column in range(self.num_cols):
                print(self.grid[row][column], end = " ")
            print()


    def get_cell_colors(self):

        #based in vim(the text editor) colors
        pink = (255, 175, 215)
        red = (255, 0, 0)
        yellow = (215, 215, 0)
        cian = (0, 255, 255)
        green = (0, 135, 0)
        turquoise = (0, 215, 255)
        purple = (95, 0, 215)
        Chartreuse = (135, 255, 0)

        return [turquoise, red, yellow, cian, green, pink, purple, Chartreuse]

    def draw(self, screen):
        for row in range(self.num_rows):
            for column in range(self.num_cols):
                cell_value = self.grid[row][column]
                cell_rect = pygame.Rect(column*self.cell_size +1, row*self.cell_size +1,
                                        self.cell_size -1, self.cell_size -1)
                pygame.draw.rect(screen, self.color[cell_value], cell_rect)
